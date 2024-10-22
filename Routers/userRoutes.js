const express = require("express");

const { createUser } = require("../Services/userServices");

const router = express.Router();

router.post("/", createUser);

module.exports = router;
