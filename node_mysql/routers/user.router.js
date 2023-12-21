const { Router } = require("express");

const user_controller = require("../controllers/user.controller");

const router = Router();

router
  .route("/")
  .get(user_controller.getAll)
  .post(user_controller.save)
  .delete(user_controller.removeAll);

router
  .route("/:id")
  .get(user_controller.getById)
  .patch(user_controller.edit)
  .delete(user_controller.remove);

module.exports = router;
