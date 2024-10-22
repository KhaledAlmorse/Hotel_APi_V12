const User = require("../Models/userSchema");

exports.createUser = (req, res) => {
  const name = req.body.name;
  const newUser = new User({ name });

  newUser
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
