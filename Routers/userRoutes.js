const express = require("express");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../Services/userServices");

const { getUserValidator } = require("../utils/validator/userValidator");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
