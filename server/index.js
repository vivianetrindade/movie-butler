const express = require('express');
const moviesController = require('./controllers/movies.js');

const app = express();
const port = 3000;
app.use(express.json());



// Example endpoint - that lines up with the test
app.get('/api/v1/movies', moviesController.getMovies);

app.get('/api/v1/movies/:id', moviesController.getMovieById);

// Don't change the code above this line!
// Write your enpoints here

// Don't change the code below this line!
if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;