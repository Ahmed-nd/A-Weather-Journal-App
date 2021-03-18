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
/* Spin up the server*/
const server = app.listen(port, ()=>{
  console.log(`http://localhost:${port}`
  );
  console.log(`running on localhost: ${port}`
  )});

// GET route
app.get('/all', (request, response) => {
    response.send(projectData);
    return projectData;
});


// POST route
const data = [];
app.post('/add', (request,response) => {
    let newEnter = {
      data: request.body.data,
      temp: request.body.temp,
      content: request.body.content
    }
    projectData = newEnter;
    data.push(newEnter);
    response.send(newEnter);
});

