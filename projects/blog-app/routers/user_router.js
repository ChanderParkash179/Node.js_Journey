const { Router } = require("express");
const user_controller = require("../controllers/user_controller");

const router = Router();

router.route("/user/signin").post(user_controller.signin);
router.route("/user/signup").post(user_controller.signup);

module.exports = router;
