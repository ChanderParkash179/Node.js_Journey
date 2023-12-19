const { Router } = require("express");
const static_controller = require("../controllers/static_controller");
const user_controller = require("../controllers/user_controller");

const router = Router();

router.route("/home").get(static_controller.homeView);
router.route("/user/signin/view").get(user_controller.signinView);
router.route("/user/signup/view").get(user_controller.signupView);

module.exports = router;
