require('dotenv').config();
const axios = require('axios');
const { connectToDatabase, client } = require('./dbConnection');
const mongodb = require('mongodb');

exports.getFavorites = async (req, res) => {
  const user = req.params.user;
  try {
    const collection = await connectToDatabase();
    const favoritesMovies = await collection.find({user: user}).toArray();

    res.status(200).json(favoritesMovies);
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Failed to find want to watch movie or serie!'})
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
      imDbRating: favoriteMovie.imDbRating,
      runTimeStr: favoriteMovie.runtimeStr,
      genres: favoriteMovie.genres,
      type: favoriteMovie.type,
      user: favoriteMovie.userMail
    }
    const newFavorite = await collection.insertOne(favMovInfo);
    res.status(201).json(newFavorite);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Error to include the movie.'});
  } finally {
    if(client) {
      await client.close();
    }
  }
}

exports.deleteFavorites = async (req, res) => {
  const id = req.params.id;
  const user = req.params.user;

  try {
    const collection = await connectToDatabase();
    const result = await collection.deleteOne({_id: new mongodb.ObjectId(id), user: user});
    
    if (result && result.deletedCount) {
      res.status(202).json({message: 'Successfully deleted'});
    } else if (!result){
      res.status(400).json({message: 'Failed to delete todo.'});
    } else if (!result.deletedCount) {
      res.status(404).json({message: 'Movie or serie not found.'});
    }
  } catch (error) {
    res.status(400).json({message: error});
  } finally {
    if(client) {
      await client.close();
    }
  }

}