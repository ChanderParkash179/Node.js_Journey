const { Router } = require("express");

const generalController = require("../controllers/general.controller");

const router = Router();

router.route("/test").get(generalController.test);

module.exports = router;
