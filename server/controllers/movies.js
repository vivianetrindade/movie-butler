require('dotenv').config();
const axios = require('axios');

exports.getMovieById = async (req, res) => {
    const movieId = req.params.id;
    console.log(movieId, 'movieId');
    console.log(process.env.SECRET_KEY, );
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.SECRET_KEY}&i=${movieId}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
                console.log(err, 'err');
                res.status(500).json({ error: err });
        })
            
    
  }

exports.getMovies = (req, res) => res.json({ message: 'You have reached the Movies API' })