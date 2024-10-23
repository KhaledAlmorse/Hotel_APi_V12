const slugify = require("slugify");
const asyncHandler = require("express-async-handlr");

const User = require("../Models/userSchema");

/**
 * @description Create User
 * @route Post /api/v1/users
 * @private admin/manger
 */

exports.createUser = asyncHandler(async (req, res) => {
  const { userName, email, password, phone, role } = req.body;
  const user = await User.create({
    userName,
    slug: slugify(userName),
    email,
    password,
    phone,
    role,
  });

  res.status(201).json({ status: "Success", data: user });
});
