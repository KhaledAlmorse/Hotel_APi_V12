const User = require("../Models/userSchema");

exports.createUser = (req, res) => {
  const name = req.body.name;
  const newUser = new User({ name });

  if (!name) {
    return res.status(400).json({ message: "Name  are required." });
  }

  newUser
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
