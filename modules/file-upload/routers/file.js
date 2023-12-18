const express = require("express");
const fileController = require("../controllers/file");

const router = express.Router();

router.route("/").get(fileController.fileUploadView);

router.route("/upload").post(fileController.fileUpload);

module.exports = router;
