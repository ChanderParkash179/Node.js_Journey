const express = require("express");
const staticController = require("../controllers/static_controller");

const router = express.Router();

router.route("/").get(staticController.homeView);

module.exports = router;
