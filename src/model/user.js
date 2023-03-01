const sql = require("./connection");

const User = function (user) {
  this.userName = user.userName;
  this.phone = user.phone;
  this.email = user.email;
};

User.newuser = (data,result) => {
  sql.query("INSERT INTO Users SET ?", data, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, userName: data.userName });
    console.log(res);
  });
};

module.exports = User;
