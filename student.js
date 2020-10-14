const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: "faculty" },
});

var studentModel = mongoose.model("student1", studentSchema);
module.exports = studentModel;
