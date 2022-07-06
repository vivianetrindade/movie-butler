require('dotenv').config();
const axios = require('axios');

exports.getMovieByGenre = async (req, res) => {
    const movieGenre = req.params.genre;
    console.log(movieGenre, 'movieId');
    console.log(process.env.SECRET_KEY, );
        axios.get(`https://imdb-api.com/API/AdvancedSearch/${process.env.SECRET_KEY}?user_rating=7.0,10&genres=${movieGenre}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
                console.log(err, 'err');
                res.status(500).json({ error: err });
        })
            
    
  }

exports.getMovies = (req, res) => res.json({ message: 'You have reached the Movies API' })