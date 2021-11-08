const survey = require("../models/Survey");

// creates a survey and stores it in the database
exports.createSurvey = async (req, res) => {
  try {
    await survey.create({
      log: req.body.logId,
      responses: req.body.responses
    })
    .then(result => {
      res.sendStatus(200);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all of the surveys from the database
exports.getAllSurveys = async (req, res) => {
  try {
    await survey.find()
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves a single survey from the database and populates the logs for that survey
exports.getSurveyWithLog = async (req, res) => {
  try {
    const foundSurvey = await survey.findById(req.params.id).populate('log');
    if (!foundSurvey) res.status(500).send("That survey was not found!");
    else res.status(200).send(foundSurvey);
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all of the surveys from the database for a given class
exports.getClassSurveys = async (req, res) => {
  try {
    await survey.find({class: req.body.class})
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all of the surveys from the database for a given semester
// currently does not have a route
exports.getSemesterSurveys = async (req, res) => {
  try {
    await survey.find({semester: req.body.semester})
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all the surveys from the database for a given semester and class
exports.getSemesterClassSurveys = async (req, res) => {
  try {
    await survey.find({
      class: req.body.class, 
      semester: req.body.semester
    })
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all the surveys from the database for a given assignemnt, class, and semester
exports.getAssignmentSemesterSurveys = async (req, res) => {
  try {
    await survey.find({
      semester: req.body.semester,
      class: req.body.class,
      assignment: req.body.assignment
    })
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};