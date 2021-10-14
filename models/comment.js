const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  text: { type: String, required: true },
  blogID: { type: String },
});

module.exports = mongoose.model("comment", Comment);
