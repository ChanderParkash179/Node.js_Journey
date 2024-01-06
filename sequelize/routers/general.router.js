const general = require("../controllers/general.controller");
const { Router } = require("express");

const router = Router();

router.route("/test").get(general.test);

module.exports = router;