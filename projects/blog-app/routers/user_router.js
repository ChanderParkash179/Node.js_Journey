const { Router } = require("express");
const user_controller = require("../controllers/user_controller");

const router = Router();

router.route("/signin").post(user_controller.signin);
router.route("/signup").post(user_controller.signup);
router.route("/signout").get(user_controller.signout);

module.exports = router;
