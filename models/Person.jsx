const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  repassword: String,
});

const PersonModel = mongoose.model("person", PersonSchema);
module.exports = PersonModel;
