const express = require("express");
const urlController = require("../controller/url");
const userController = require("../controller/user");

const router = express.Router();

// get all urls on view
router.route("/").get(urlController.homeView);

router.route("/signup").get(userController.signupView);
router.route("/login").get(userController.loginView);

module.exports = router;
