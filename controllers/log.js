const log = require("../models/Log");

// creates a log and stores it in the database
exports.createLog = async (req, res) => {
  try {
    await log.create({
      semester: req.body.semester,
      class: req.body.class,
      assignment: req.body.assignment,
      part: req.body.part,
      questions: req.body.questions
    })
    .then(result=>{
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all of the logs from the database
exports.getAllLogs = async (req, res) => {
  try{
    await log.find()
    .then(result => {
      res.status(200).send(result)
    })
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves a single log from the database by id
exports.getLogById = async (req, res) => {
  try {
    const foundLog = await log.findById(req.params.id);
    if (!foundLog) res.status(500).send("That log was not found!");
    else res.status(200).send(foundLog);
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
}

// retrieves all of the logs from the database for a given class
exports.getClassLogs = async (req, res) => {
  try{
    await log.find({class: req.body.class})
    .then(result => {
      res.status(200).send(result)
    })
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all the logs from the database for a given class and semester
exports.getSemesterClassLogs = async (req, res) => {
  try{
    await log.find({
      semester: req.body.semester, 
      class: req.body.class
    })
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all the logs from the database for a given assignment, class, and semester
exports.getAssignmentSemesterLogs = async (req, res) => {
  try {
    await log.find({
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

exports.getAssignmentPartLogs = async (req, res) => {
  try {
    await log.find({
      semester: req.body.semester,
      class: req.body.class,
      assignment: req.body.assignment,
      part: req.body.part
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

exports.getLogsByQuestion = async (req,res) => {
  try {
    if (req.body.err_or_tf == "tf") {
      await log.find({
        class: req.body.class,
        assignment: req.body.assignment,
        part: req.body.part,
        questions: { 
          $elemMatch: { 
            err_or_tf: req.body.err_or_tf,
            tf_test: req.body.tf_test
          }
        }
      })
      .then(result => {
        res.status(200).send(result);
      });
    }
    else {
      // Do i need class and stuff for this?
      await log.find({
        class: req.body.class,
        assignment: req.body.assignment,
        part: req.body.part,
        questions: { 
          $elemMatch: { 
            err_or_tf: req.body.err_or_tf,
            question: req.body.question
          }
        }
      })
      .then(result => {
        res.status(200).send(result);
      });
    }
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};