const express = require("express");
const router = express.Router();
//import controllers
const { login, signupController } = require("../controllers/userControllers");

//user routes
router.post("/signup", signupController);

router.post("/login", login);

module.exports = router;
