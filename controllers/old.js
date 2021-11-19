// // log.js
// const log = require("../models/Log");

// // creates a log and stores it in the database
// exports.createLog = async (req, res) => {
//   try {
//     await log.create({
//       semester: req.body.semester,
//       class: req.body.class,
//       assignment: req.body.assignment,
//       part: req.body.part,
//       questions: req.body.questions
//     })
//     .then(result=>{
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all of the logs from the database
// exports.getAllLogs = async (req, res) => {
//   try{
//     await log.find()
//     .then(result => {
//       res.status(200).send(result)
//     })
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves a single log from the database by id
// exports.getLogById = async (req, res) => {
//   try {
//     const foundLog = await log.findById(req.params.id);
//     if (!foundLog) res.status(500).send("That log was not found!");
//     else res.status(200).send(foundLog);
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// }

// // retrieves all of the logs from the database for a given class
// exports.getClassLogs = async (req, res) => {
//   try{
//     await log.find({class: req.body.class})
//     .then(result => {
//       res.status(200).send(result)
//     })
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all the logs from the database for a given class and semester
// exports.getSemesterClassLogs = async (req, res) => {
//   try{
//     await log.find({
//       semester: req.body.semester, 
//       class: req.body.class
//     })
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all the logs from the database for a given assignment, class, and semester
// exports.getAssignmentSemesterLogs = async (req, res) => {
//   try {
//     await log.find({
//       semester: req.body.semester,
//       class: req.body.class,
//       assignment: req.body.assignment
//     })
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// exports.getAssignmentPartLogs = async (req, res) => {
//   try {
//     await log.find({
//       semester: req.body.semester,
//       class: req.body.class,
//       assignment: req.body.assignment,
//       part: req.body.part
//     })
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// exports.getLogsByQuestion = async (req,res) => {
//   try {
//     if (req.body.err_or_tf == "tf") {
//       await log.find({
//         class: req.body.class,
//         assignment: req.body.assignment,
//         part: req.body.part,
//         questions: { 
//           $elemMatch: { 
//             err_or_tf: req.body.err_or_tf,
//             tf_test: req.body.tf_test
//           }
//         }
//       })
//       .then(result => {
//         res.status(200).send(result);
//       });
//     }
//     else {
//       // Do i need class and stuff for this?
//       await log.find({
//         class: req.body.class,
//         assignment: req.body.assignment,
//         part: req.body.part,
//         questions: { 
//           $elemMatch: { 
//             err_or_tf: req.body.err_or_tf,
//             question: req.body.question
//           }
//         }
//       })
//       .then(result => {
//         res.status(200).send(result);
//       });
//     }
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };



// // survey.js
// const survey = require("../models/Survey");

// // creates a survey and stores it in the database
// exports.createSurvey = async (req, res) => {
//   try {
//     await survey.create({
//       log: req.body.logId,
//       responses: req.body.responses
//     })
//     .then(result => {
//       res.sendStatus(200);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all of the surveys from the database
// exports.getAllSurveys = async (req, res) => {
//   try {
//     await survey.find()
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves a single survey from the database and populates the logs for that survey
// exports.getSurveyWithLog = async (req, res) => {
//   try {
//     const foundSurvey = await survey.findById(req.params.id).populate('log');
//     if (!foundSurvey) res.status(500).send("That survey was not found!");
//     else res.status(200).send(foundSurvey);
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all of the surveys from the database for a given class
// exports.getClassSurveys = async (req, res) => {
//   try {
//     await survey.find({class: req.body.class})
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all of the surveys from the database for a given semester
// // currently does not have a route
// exports.getSemesterSurveys = async (req, res) => {
//   try {
//     await survey.find({semester: req.body.semester})
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all the surveys from the database for a given semester and class
// exports.getSemesterClassSurveys = async (req, res) => {
//   try {
//     await survey.find({
//       class: req.body.class, 
//       semester: req.body.semester
//     })
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all the surveys from the database for a given assignemnt, class, and semester
// exports.getAssignmentSemesterSurveys = async (req, res) => {
//   try {
//     await survey.find({
//       semester: req.body.semester,
//       class: req.body.class,
//       assignment: req.body.assignment
//     })
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch (err){
//     console.log(err);
//     res.sendStatus(500);
//   }
// };



// // testSurvey.js
// const testSurvey = require("../models/TestSurvey");

// // creates a test survey and stores it in the database
// exports.createTestSurvey = async (req, res) => {
//   try {
//     await testSurvey.create({responses: req.body.responses})
//     .then(result => {
//       res.sendStatus(200);
//     });
//   }
//   catch {
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // retrieves all of the test surveys from the database
// exports.getTestSurveys = async (req,res) => {
//   try {
//     await testSurvey.find()
//     .then(result => {
//       res.status(200).send(result);
//     });
//   }
//   catch {
//     console.log(err);
//     res.sendStatus(500);
//   }
// };