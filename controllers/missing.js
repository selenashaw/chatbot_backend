const missing = require("../models/Missing");

// creates a missing request and stores it in the database
exports.createMissing = async (req, res) => {
  try {
    await missing.create({
      log: req.body.logId,
      err_msg: req.body.err_msg
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


// retrieves all of the missing requests from the database
exports.getAllMissing = async (req, res) => {
  try {
    await missing.find()
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves a single missing request from the database and populates the log
exports.getMissingWithLog = async (req, res) => {
  try {
    const missed = await missing.findById(req.params.id).populate('log');
    if (!missed) res.status(500).send("That request was not found!");
    else res.status(200).send(missed);
  }
  catch (err){
    console.log(err);
    res.sendStatus(500);
  }
};

exports.deleteMissing = async (req, res) => {
  try {
    await missing.findByIdAndRemove(req.body.id)
    .then(result => {
      res.status(200).send("Deleted Successfully");
    });
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}