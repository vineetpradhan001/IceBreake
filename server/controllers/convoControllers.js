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

export const getConvo = async (req, res) => {
  const { title } = req.query;

  try {
    const convos = title
      ? await Convo.find({
          title: { $regex: `${title}`, $options: "i" },
        })
      : await Convo.find();
    res.status(200).json(convos);
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
    await Convo.findByIdAndDelete(id);
    res.status(200).json("Deleted Successfully");
  } catch (e) {
    res.status(400).json(e);
  }
};

export const updateConvo = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    await Convo.findByIdAndUpdate(id, body);
    res.status(200).json("Updated Successfully");
  } catch (e) {
    res.status(400).json(e);
  }
};
