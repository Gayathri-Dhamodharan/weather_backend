const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");

router
  .route("/userpost")
  .post(controller.userControl)
  .get(controller.getControl);

module.exports = router;
