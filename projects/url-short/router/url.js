const express = require("express");
const urlController = require("../controller/url");

const router = express.Router();

// post a short url
router.route("/").get(urlController.getURLs).post(urlController.createShortID);

// get route
router.route("/:shortId").get(urlController.redirection);

// get analytics
router.route("/analytics/:shortId").get(urlController.getAnalytics);

module.exports = router;
