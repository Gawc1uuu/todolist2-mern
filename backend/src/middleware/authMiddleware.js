const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "authorization token is required" });
  }

  const token = authorization.slice(7);

  try {
    const { _id } = jwt.verify(token, "secret");
    req.user = await User.findById(_id).select("_id");
    next();
  } catch (error) {
    return res.status(401).json({ error: "We dont know that user" });
  }
};

module.exports = { authMiddleware };
