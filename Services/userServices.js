const slugify = require("slugify");
const asyncHandler = require("express-async-handlr");

const User = require("../Models/userSchema");

/**
 * @description Create User
 * @route Post /api/v1/users
 * @private admin/manger
 */

exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  const user = await User.create({
    name,
    slug: slugify(name),
    email,
    password,
    phone,
    role,
  });

  res.status(201).json({ status: "Success", data: user });
});
