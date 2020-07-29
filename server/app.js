const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const dbService = require("./dbService");

app.use(cors()); //This will send data to our back-end
app.use(express.json()); //to send the response in json format
app.use(express.urlencoded({ extended: false })); //The value will be string or array

//create
app.post("/insert", (req, res, next) => {});
//read
app.get("/getAll", (req, res, next) => {
  res.json({
    success: true,
  });
});
//update

//delete

app.listen(process.env.PORT, () => console.log("App is running"));
