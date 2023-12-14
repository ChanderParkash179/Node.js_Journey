const express = require("express");
const userController = require("../controller/user_controller");

const routers = express.Router();

// get all users
// save user
routers
  .route("/")
  .get(userController.listOfUser)
  .post(userController.createUser);

// get user by firstName
// update user
// delete user
routers
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = routers;
