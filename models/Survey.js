const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const surveySchema = new Schema({
  semester: String,
  class: String,
  assignment: String,
  responses: [String],
  log: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "log"
  }
});

const survey = mongoose.model("survey", surveySchema);

module.exports = survey;