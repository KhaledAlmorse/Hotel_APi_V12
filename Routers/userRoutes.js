const express = require("express");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../Services/userServices");

const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} = require("../utils/validator/userValidator");

const router = express.Router();

router.route("/").post(createUserValidator, createUser).get(getUsers);

router
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

module.exports = router;
