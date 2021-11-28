require('dotenv').config()

const mongoose=require("mongoose");


const app = require('./App');


const uri = process.env.MONGODB_URI;
let port = process.env.PORT || 8000;

mongoose.connect(uri).then(() => {
  console.log("Connected to database");
  app.listen(port, ()=>{
    console.log("App listening on port 8000");
  });
});

module.exports={mongoose};