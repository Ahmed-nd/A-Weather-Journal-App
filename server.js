// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, () => { console.log(`server running on http://localhost:${port}`) });

// Get to returns the projectData object
app.get('/all', (req, res) => {
    res.send(projectData)
});

// Post adds incoming data to projectData
const addData = [];
app.post('/addData', (req, res) => {
    const newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    projectData = newEntry;
    console.log(projectData)
    res.send(newEntry);
});