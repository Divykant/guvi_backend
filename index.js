const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PersonModel = require("./models/Person");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/guvi_db");

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
