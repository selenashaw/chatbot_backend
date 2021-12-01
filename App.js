var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors({
  // origin:"http://localhost:3000"
  origin:"https://labtachatbot.herokuapp.com/"
}));

// Routes
const logRoute = require('./routes/logRoutes');
const missingRoute = require('./routes/missingRoutes');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Routes
app.use('/log', logRoute);
app.use('/missing', missingRoute);

module.exports=app;