const User = require("../model/user");

exports.create = (req, res) => {
  if (!req.body.phone) {
    res.status(400).send("Phone Number Required");
    console.log("Phone Number Required");
  }
  if (!req.body.userName) {
    res.status(400).send("Username is required");
    console.log("Username is required");
  }

  var user = new User({
    userName: req.body.userName,
    phone: req.body.phone,
    email: req.body.email,
  });
  User.newuser(user, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send({ message: err || "Something is went wrong" });
    } else res.status(200).send(data);
  });
};
