import mongoose from "mongoose";
import isAlphanumeric from "validator/lib/isalphanumeric.js";
import isEmail from "validator/lib/isEmail.js";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
    lowercase: true,
    minLength: [4, "Username must have atleast 4 characters"],
    maxLength: [20, "Username can have atmost 20 characters"],
    validate: [
      isAlphanumeric.default,
      "Username only contains alphabets and numbers",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Password must have atleast 6 characters"],
  },
});

const User = mongoose.model("user", UserSchema);
export default User;
