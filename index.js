const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const student = require("./models/Student");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MONGODB CONNECTED");
})
.catch((err)=>{
    console.log("Unable to connect DB", err);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
    console.log("Server Connected at" +PORT);
});