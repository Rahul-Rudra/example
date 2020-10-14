const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var facultySchema = new Schema({
  name: { type: String, required: true },
  charges: { type: Number, required: true },
  course: { type: String, required: true },
  
});

var facultyModel = mongoose.model("faculty", facultySchema);
module.exports = facultyModel;
