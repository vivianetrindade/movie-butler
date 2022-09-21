const express = require('express');
const moviesController = require('./controllers/movies.js');
const favoritesController = require('./controllers/favorites');
const cors = require('cors');


const app = express();
const port = 8080;
app.use(express.json());


app.use(cors())
// Example endpoint - that lines up with the test
app.get('/api/v1/top250movies', moviesController.getTop250Movies);

app.get('/api/v1/movies/:genre', moviesController.getMovieByGenre);

app.get('/api/v1/top250tv', moviesController.getTop250Tv);

app.get('/api/v1/movies/byid/:id', moviesController.getMovieByID);

app.get('/api/favoritesmovies', favoritesController.getFavorites);

app.post('/api/favoritesmovies', favoritesController.postFavorites);

// Don't change the code above this line!
// Write your enpoints here

// Don't change the code below this line!
if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;