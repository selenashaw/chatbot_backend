const log = require("../models/Log");

// creates a log and stores it in the database
exports.createLog = async (req, res) => {
  try {
    await log.create({
      queries: req.body.queries
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

// retrieves all the logs for a certain query format
exports.getLogsByQuery = async (req,res) => {
  try {
    await log.find({
      queries: { 
        $elemMatch: { 
          category: req.body.category,
        }
      }
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