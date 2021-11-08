// Log.js
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


// Survey.js
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


// TestSurvey.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSurveySchema = new Schema({
  responses: [String] 
});

const testSurvey = mongoose.model("testSurvey", testSurveySchema);

module.exports = testSurvey;