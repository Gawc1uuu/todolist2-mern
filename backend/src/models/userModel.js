const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and password are required");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("user with that email already exists");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is incorrect");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and password are required");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("user with that email do not exists");
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return user;
  } else {
    throw Error("bad password");
  }
};

module.exports = mongoose.model("User", userSchema);
