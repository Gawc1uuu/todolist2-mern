const User = require("../models/userModel");

//user controllers
const signup = (req, res) => {
  res.status(200).json({ msg: "SIGN UP A USER" });
};

const login = (req, res) => {
  res.status(200).json({ msg: "LOGIN A USER" });
};

module.exports = { signup, login };
