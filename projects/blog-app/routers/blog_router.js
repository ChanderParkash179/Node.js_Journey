const { Router } = require("express");
const blog_controller = require("../controllers/blog_controller");

const router = Router();

router.route("/form").post(blog_controller.blog);

module.exports = router;
