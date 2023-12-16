const express = require("express");
const userController = require("../controller/user");

const routers = express.Router();

routers.post("/signup", userController.signupData);
routers.post("/login", userController.loginData);

module.exports = routers;
