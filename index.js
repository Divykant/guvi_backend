const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const PersonModel = require("./models/Person");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://divykantsingh08:ZKrSbEZkmBI2OSfi@guvi-test-db.fpegr85.mongodb.net/?retryWrites=true&w=majority"
  // "mongodb://127.0.0.1:27017/employee"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  PersonModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect");
      }
    } else {
      res.json("no record");
    }
  });
});

app.post("/signup", (req, res) => {
  PersonModel.create(req.body)
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("running");
});
