const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  saying: { type: String },
  //date: { type: Date },
});

module.exports = mongoose.model("Saying", schema);
