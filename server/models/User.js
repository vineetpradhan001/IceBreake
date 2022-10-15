import mongoose from "mongoose";
import isAlphanumeric from "validator/lib/isalphanumeric.js";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcrypt";

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

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const bool = isEmail(email);
  const user = bool
    ? await this.findOne({ email })
    : await this.findOne({ username: email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error(`${bool ? "incorrect email" : "incorrect username"}`);
};

const User = mongoose.model("user", UserSchema);
export default User;
