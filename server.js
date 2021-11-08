require('dotenv').config()

const mongoose=require("mongoose");


const app = require('./App');


const uri = process.env.MONGODB_URI;
// MONGODB_URI="mongodb+srv://COSChatbot:EJgY8KZOctUo651B@lab-ta-chatbot.2oqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//const uri ="mongodb+srv://COSChatbot:EJgY8KZOctUo651B@lab-ta-chatbot.2oqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
  console.log("Connected to database");
  app.listen(8000, ()=>{
    console.log("App listening on port 8000");
  });
});