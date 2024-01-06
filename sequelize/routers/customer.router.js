const customer = require("../controllers/customer.controller");
const { Router } = require("express");

const router = Router();

router.route("/").post(customer.create).get(customer.findAll);

router.route("/:email").get(customer.find).delete(customer.remove).patch(customer.update);

module.exports = router;