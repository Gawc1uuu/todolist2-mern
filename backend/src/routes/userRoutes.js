const express = require("express");
const router = express.Router();
//import controllers
const { signup, login } = require("../controllers/userControllers");

//user routes
router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
