const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const token = jwt.sign({ _id }, "secret", { expiresIn: "1h" });
  return token;
};

//user controllers
const signupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const loginContoller = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { signupController, loginContoller };
