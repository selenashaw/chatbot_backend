require('dotenv').config()

const mongoose=require("mongoose");


const app = require('./App');


const uri = process.env.MONGODB_URI;

mongoose.connect(uri).then(() => {
  console.log("Connected to database");
  app.listen(8000, ()=>{
    console.log("App listening on port 8000");
  });
});