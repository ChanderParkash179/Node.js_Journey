const express = require("express");
const urlController = require("../controller/url");

const router = express.Router();

// get all urls on view
router.route("/").post(urlController.createShortID);

router.route("/redirect/:shortId").get(urlController.redirection);

module.exports = router;
