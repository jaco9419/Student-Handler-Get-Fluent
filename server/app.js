const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const dbService = require('./dbService');

app.use(cors()); //This will send data to our back-end
app.use(express.json()); //to send the response in json format
app.use(express.urlencoded({ extended: false })); //The value will be string or array

//create
app.post('/insert', (request, response) => {
    console.log(request.body);
});

//read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
        .then((data) => response.json({ data: data }))
        .catch((err) => console.log(err));
});
//update

//delete

app.listen(process.env.PORT, () => console.log('App is running'));
