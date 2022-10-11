const express = require('express');
const moviesController = require('./controllers/movies.js');
const favoritesController = require('./controllers/favorites');
const cors = require('cors');
const {expressjwt: jwt} = require("express-jwt");
const jwks = require('jwks-rsa');


const app = express();
const port = 8080;
app.use(express.json());


app.use(cors())

const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-u9kq7hje.us.auth0.com/.well-known/jwks.json'
}),
audience: 'http://localhost:8080',
issuer: 'https://dev-u9kq7hje.us.auth0.com/',
algorithms: ['RS256']
});


app.get('/api/v1/top250movies', moviesController.getTop250Movies);

app.get('/api/v1/movies/:genre', moviesController.getMovieByGenre);

app.get('/api/v1/top250tv', moviesController.getTop250Tv);

app.get('/api/v1/movies/byid/:id', moviesController.getMovieByID);

app.use(verifyJwt);

app.get('/api/favoritesmovies/:user', favoritesController.getFavorites);

app.post('/api/favoritesmovies', favoritesController.postFavorites);

app.delete('/api/favoritesmovies/:id/:user', favoritesController.deleteFavorites);

// Don't change the code above this line!
// Write your enpoints here

// Don't change the code below this line!
if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;