const { Router } = require("express");
const static_controller = require("../controllers/static_controller");
const user_controller = require("../controllers/user_controller");
const blog_controller = require("../controllers/blog_controller");

const router = Router();

// home route
router.route("/home").get(static_controller.homeView);

// blog route
router.route("/blog/view").get(blog_controller.blogsView);
router.route("/blog/:id").get(blog_controller.blogView);

// signin & signup route
router.route("/user/signin/view").get(user_controller.signinView);
router.route("/user/signup/view").get(user_controller.signupView);

module.exports = router;
