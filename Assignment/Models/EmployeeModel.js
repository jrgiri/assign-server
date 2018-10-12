var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  employeeId: String,
  role: String
});

module.exports = mongoose.model('employee', employeeSchema);
