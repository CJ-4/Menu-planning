var Meal = require("../models/meal");

// // Handle Author create on POST.
// exports.user_create_post = function(req, res) {
//   res.send('NOT IMPLEMENTED: Author create POST');
// };

exports.meal_create = [
  (req, res) => {
    //Create your user object and map fields from json input
    var meal = new Meal({
      foodName: req.body.foodName,
      description: req.body.description
    });

    meal.save().then(() => console.log("Meal Saved Successfully"));
    res.send("Meal Saved Successfully");
  },
];

exports.meal_get = [
  async (req, res) => {
    var meal = await Meal.find().exec();
    return res.json(meal);
    }
];
