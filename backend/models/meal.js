var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MealSchema = new Schema({
  foodName: String,
  description: String
});
// Export model.
module.exports = mongoose.model('Meal', MealSchema);