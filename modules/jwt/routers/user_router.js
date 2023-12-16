const express = require("express");
const userController = require("../controllers/user_controller");

const router = express.Router();

router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);

router.route("/view/signup").get(userController.signupView);
router.route("/view/login").get(userController.loginView);

module.exports = router;
