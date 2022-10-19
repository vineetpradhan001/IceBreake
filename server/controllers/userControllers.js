import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const query = req.query;
  if (query.username) {
    query.username = { $regex: `${query.username}`, $options: "i" };
  } else {
    delete query.username;
  }

  try {
    const users = await User.find(query).select("username followers following");
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("username followers following");
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e);
  }
};
