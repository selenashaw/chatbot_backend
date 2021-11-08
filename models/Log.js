const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  semester: String,
  class: String,
  assignment: String,
  part: String,
  questions: [{
    err_or_tf: String,
    tf_test: String,
    question: String
  }]
});

const log = mongoose.model("log", logSchema);

module.exports = log;