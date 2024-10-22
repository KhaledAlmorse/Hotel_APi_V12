const express = require("express");

const { createUser } = require("../Services/userServices");

const router = express.Router();

router.post("/create", createUser);

module.exports = router;
