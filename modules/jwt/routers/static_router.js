const express = require("express");
const staticController = require("../controllers/static_controller");
const auth_middleware = require("../middlewares/auth_mid");

const router = express.Router();

router
  .route("/home")
  .get(auth_middleware.restrictTo(["NORMAL"]), staticController.homeView);

router
  .route("/admin/")
  .get(
    auth_middleware.restrictTo(["NORMAL", "ADMIN"]),
    staticController.adminView
  );

module.exports = router;
