const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = async (_id) => {
  const token = jwt.sign({ _id }, "secret", { expiresIn: "1h" });
  return token;
};

//user controllers
const signupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = await createToken(user._id);
    return res.status(200).json({ email, token: token });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

const login = (req, res) => {
  res.status(200).json({ msg: "LOGIN A USER" });
};

module.exports = { signupController, login };
