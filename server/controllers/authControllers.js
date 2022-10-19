import User from "../models/User.js";
import Convo from "../models/Convo.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handleErrors = (err) => {
  let errors = {};
  console.log(err);

  if (err.message === "incorrect email") {
    errors.email = "Email is not registered";
  }
  if (err.message === "incorrect username") {
    errors.username = "Username is not registered";
  }
  if (err.message === "incorrect password") {
    errors.password = "Incorrect Password";
  }

  if (err.code === 11000) {
    if (err.keyValue?.email) {
      errors.email = "Email is already registered";
    }
    if (err.keyValue?.username) {
      errors.username = "Username is already registered";
    }
  }

  if (
    err.message.includes("user validation failed") ||
    err.message.includes("Validation failed")
  ) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const verifyJWT = async (token) => {
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decodedToken.id);
      return user;
    } catch (e) {
      throw Error(e);
    }
  } else {
    throw Error("JWT not found");
  }
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge });

export const signup = async (req, res) => {
  const data = req.body;

  try {
    const user = await User.create(data);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.status(200).json(user._id);
  } catch (e) {
    const errors = handleErrors(e);
    res.status(400).json(errors);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.status(200).json(user._id);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }
};
export const logout = (_req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json("Logged out Successfully");
};
export const currentUser = async (req, res) => {
  try {
    let user = await verifyJWT(req.cookies.jwt);
    if (user) {
      user = user.toJSON();
      delete user.password;
      res.status(200).json(user);
    } else {
      throw Error("User not found");
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};
export const updateUser = async (req, res) => {
  const { currPassword, ...body } = req.body;

  try {
    const user = await verifyJWT(req.cookies.jwt);
    if (!body.password) {
      delete body.password;
    }
    const auth = await bcrypt.compare(currPassword, user.password);
    if (auth) {
      const updatedUser = await User.findByIdAndUpdate(user._id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(updatedUser._id);
    } else {
      res.status(400).json({ currPassword: "Incorrect Password" });
    }
  } catch (e) {
    const errors = handleErrors(e);
    res.status(400).json(errors);
  }
};
export const deleteUser = async (req, res) => {
  const { currPassword } = req.body;

  try {
    const user = await verifyJWT(req.cookies.jwt);
    const auth = await bcrypt.compare(currPassword, user.password);
    if (auth) {
      await Convo.deleteMany({ createdBy: user._id });
      const deletedUser = await User.findByIdAndDelete(user._id);
      res.status(200).json(deletedUser._id);
    } else {
      res.status(400).json({ currPassword: "Incorrect Password" });
    }
  } catch (e) {
    res.status(400).json(e);
  }
};
