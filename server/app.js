const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors()); //This will send data to our back-end
app.use(express.json()); //to send the response in json format
app.use(espress.urlencoded({ extended: false }));

//create
app.post("/insert", (request, response) => {});
//read

//update

//delete
