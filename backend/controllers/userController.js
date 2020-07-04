var User = require("../models/user");

// // Handle Author create on POST.
// exports.user_create_post = function(req, res) {
//   res.send('NOT IMPLEMENTED: Author create POST');
// };

exports.user_create = [
  (req, res) => {
    //Create your user object and map fields from json input
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
    });

    user.save().then(() => console.log("User Saved Successfully"));
    res.send("User Saved Successfully");
  },
];

exports.user_get = [
  async (req, res) => {
    var user = await User.findById(req.params._id).exec();
    return res.json(user);
    }
];

exports.user_login = [
  (req, res) => {
    //Create your user object and map fields from json input
    var beforeLoginUser = new User({
      userName: req.body.userName,
      password: req.body.password,
    });

    async (res) => {
      var userDB = await User.find({ userName: /beforeLoginUser/ }).exec();
      return res.json(user);
      }

      if (userDB.password === beforeLoginUser.password){
        res.send("User Authenticated Successfully");
      } else {
        res.send("User NOT Authenticated")
        //TODO send response code 400
      }
  },
];
