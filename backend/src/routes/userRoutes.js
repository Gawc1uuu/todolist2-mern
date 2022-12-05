const express = require("express");
const router = express.Router();
//import controllers
const {
  loginContoller,
  signupController,
} = require("../controllers/userControllers");

//user routes
router.post("/signup", signupController);

router.post("/login", loginContoller);

module.exports = router;
