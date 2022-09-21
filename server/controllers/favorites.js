require('dotenv').config();
const axios = require('axios');
const { connectToDatabase, client } = require('./dbConnection');

exports.getFavorites = async (req, res) => {

  try {
    const collection = await connectToDatabase();
    const favoritesMovies = await collection.find({}).toArray();
    console.log(favoritesMovies);
    res.status(200).json(favoritesMovies);
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Failed to find want to wathc movies!'})
  }finally {
    if(client) {
      await client.close();
    }
  }
}

exports.postFavorites = async (req, res) => {
  const favoriteMovie = req.body;
  try {
    const collection = await connectToDatabase();
    const favMovInfo = {
      filmId: favoriteMovie.id,
      title: favoriteMovie.title,
      realeseYear: favoriteMovie.year,
      description: favoriteMovie.plot,
      image: favoriteMovie.image,
      stars: favoriteMovie.stars,
      user: favoriteMovie.user
    }
    const newFavorite = await collection.insertOne(favMovInfo);
    res.status(201).json(newFavorite)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Error to include the movie.'});
  } finally {
    if(client) {
      await client.close()
    }
  }
}