import mongoose from "mongoose";
import isNumeric from "validator/lib/isNumeric.js";

const ConvoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter convo title"],
      maxLength: [80, "Max length of convo is 80"],
    },
    openingMessage: {
      type: String,
      required: [true, "Please enter opening message"],
    },
    maxUsers: {
      type: String,
      required: [true, "Please enter maximum number of users you want"],
      validate: [isNumeric, "Please enter a valid number"],
    },
    createdBy: String,
    users: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Convo = mongoose.model("convo", ConvoSchema);
export default Convo;
