const express = require("express");

const { createUser } = require("../Services/userServices");

const router = express.Router();

router.route("/").post(createUser);

module.exports = router;
