const express = require("express");

const Missing = require("../controllers/missing");

const router = express.Router();

// Routes

router.get("/", Missing.getAllMissing);

router.get("/:id", Missing.getMissingWithLog);

router.post("/", Missing.createMissing);

router.delete("/", Missing.deleteMissing)

module.exports = router;