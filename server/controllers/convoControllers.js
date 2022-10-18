import Convo from "../models/Convo.js";

const handleErrors = (err) => {
  let errors = {};

  if (err.message.includes("convo validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

export const getConvos = async (req, res) => {
  const query = req.query;
  if (query.title) {
    query.title = { $regex: `${query.title}`, $options: "i" };
  } else {
    delete query.title;
  }
  try {
    const convos = await Convo.find(query);
    res.status(200).json(convos);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const getConvo = async (req, res) => {
  const { id } = req.params;
  try {
    const convo = await Convo.findById(id);
    res.status(200).json(convo);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const createConvo = async (req, res) => {
  const data = req.body;

  try {
    const convo = await Convo.create(data);
    res.status(200).json(convo._id);
  } catch (e) {
    const errors = handleErrors(e);
    res.status(400).json(errors);
  }
};

export const deleteConvo = async (req, res) => {
  const { id } = req.params;

  try {
    const convo = await Convo.findByIdAndDelete(id);
    res.status(200).json(convo._id);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const updateConvo = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    console.log(id, body);
    const convo = await Convo.findByIdAndUpdate(id, body, { new: true });
    console.log(convo);
    res.status(200).json(convo._id);
  } catch (e) {
    res.status(400).json(e);
  }
};
