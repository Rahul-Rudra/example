const express = require("express");
const Mongoose = require("mongoose");
//const student = require("./student");
var studentModel = require("./student");
var facultyModel = require("./dept");
const PORT = 4000;
const {
  body,
  validationResult,
  check,
  checkSchema,
} = require("express-validator");

const app = express();
Mongoose.connect("mongodb://localhost:27017/test");
app.use(express.json());

app.post(
  "/students",
  [
    check("firstName").isString(),
    body("lastName").isString(),
    body("email").isEmail(),
    body("course").isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    studentModel
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        course: req.body.course,
      })
      .then((user) => res.json(user));
  }
);

app.post(
  "/facultys",
  [
    body("name").isString(),
    body("charges").isNumeric(),
    body("course").isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    facultyModel
      .create({
        name: req.body.name,
        charges: req.body.charges,
        course: req.body.course,
      })
      .then((user) => res.json(user));
  }
);

app.get("/facultys", async (req, res) => {
  try {
    var result = await facultyModel.find();
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/students", async (req, res) => {
  try {
    var result = await studentModel.find();
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(4000, (req, res) => {
  console.log(`Running on port :${PORT}`);
});
