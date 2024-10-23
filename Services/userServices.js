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

/**
 * @description Get List of Users
 * @route Get /api/v1/users
 * @private admin/manger
 */

exports.getUsers = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const user = await User.find({}).skip(skip).limit(limit);

  res.status(200).json({ Results: user.length, page, data: user });
});

/**
 * @description Get Specific  User
 * @route Get /api/v1/users/:id
 * @private admin/manger
 */

exports.getUser = asyncHandler(async (req, res) => {
  const id = req.params;
  const user = await User.findById(id);
  if (!user) {
    res.status(400).json({ msg: `No Category For This Id: ${id}` });
  }
  res.status(200).json({ Results: user.length, data: user });
});

/**
 * @description Update Specific  User
 * @route Put /api/v1/users/:id
 * @private admin/manger
 */

exports.updateUser = asyncHandler(async (req, res) => {
  const id = req.params;

  const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json({ data: user });
});

/**
 * @description Delete Specific  User
 * @route Delete /api/v1/users/:id
 * @private admin/manger
 */

exports.deleteUser = asyncHandler(async (req, res) => {
  const id = req.params;

  const user = await User.findByIdAndDelete(id);
  if (!user) {
    res.status(400).json({ msg: `No Category For This Id: ${id}` });
  }
  res.status(204).json({ status: "Delete Sucess" });
});
