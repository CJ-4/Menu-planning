var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  password: String
});
// Export model.
module.exports = mongoose.model('User', UserSchema);