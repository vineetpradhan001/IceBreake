import User from "../models/User.js";
import jwt from "jsonwebtoken";

const handleErrors = (err) => {
  let errors = {};

  if (err.code === 11000) {
    if (err.keyValue?.email) {
      errors.email = "Email is already registered";
    }
    if (err.keyValue?.username) {
      errors.email = "Username is already registered";
    }
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const createToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: 3 * 24 * 60 * 60 });

export const signup = async (req, res) => {
  const data = req.body;

  try {
    const user = await User.create(data);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: 3 * 24 * 60 * 60 * 1000 });
    res.status(200).json(user._id);
  } catch (e) {
    const errors = handleErrors(e);
    res.status(400).json(errors);
  }
};
