const mongoose=require("mongoose");


const app = require('./App');

mongoose.connect(uri).then(() => {
  console.log("Connected to database");
  app.listen(8000, ()=>{
    console.log("App listening on port 8000");
  });
});