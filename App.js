var express = require('express');
var app = express();

// Routes
// ie const logRoute = require('./routes/logRoute);

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Initialize Routes
// ie app.use('/log',logRoute);

module.exports=app;