const { check } = require("express-validator");
const vaildatorMiddlware = require("../../Middlware/validatorMiddlware");

exports.getUserValidator = [
  check("id").isMongoId().withMessage("Invalid Id Format"),
  vaildatorMiddlware,
];
