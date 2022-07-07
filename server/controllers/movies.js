require('dotenv').config();
const axios = require('axios');
const fs = require('fs');


exports.getMovieByGenre = async (req, res) => {
    const shouldCallRealApi = req.query.mock === 'true';
    if (shouldCallRealApi) {
        res.status(200).json(mockData());
        return;
    }
    const movieGenre = req.params.genre;
        axios.get(`https://imdb-api.com/API/AdvancedSearch/${process.env.SECRET_KEY_DANIEL}?user_rating=7.0,10&genres=${movieGenre}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
                console.log(err, 'err');
                res.status(500).json({ error: err });
        })
  }

exports.getTop250Movies = async (req, res) => {
    const shouldCallRealApi = req.query.mock === 'true';
    if (shouldCallRealApi) {
        res.status(200).json(mockData());
        return;
    }
    axios.get(`https://imdb-api.com/API/Top250Movies/${process.env.SECRET_KEY_DANIEL}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => {
        console.log(err, 'err');
        res.status(500).json({ error: err });
    })
}

exports.getTop250Tv = (req, res) => {

    const shouldCallRealApi = req.query.mock === 'true';
    if (shouldCallRealApi) {
        res.status(200).json(mockData());
        return;
    }

    axios.get(`https://imdb-api.com/API/Top250Tvs/${process.env.SECRET_KEY_DANIEL}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => {
        console.log(err, 'err');
        res.status(500).json({ error: err });
    })
}

exports.getMovieByID = async (req, res) => {
    const movieId = req.params.id;
    const shouldCallRealApi = req.query.mock === 'true';
    if (shouldCallRealApi) {
        const movie = mockDataID().find(movie => movie.id === movieId);
        res.status(200).json(movie);
        return;
    }
    axios.get(`https://imdb-api.com/en/API/Title/${process.env.SECRET_KEY_DANIEL}/${movieId}`)
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(err => {
        console.log(err, 'err');
        res.status(500).json({ error: err });
    })
}

const mockData = () => {
    let rawdata = fs.readFileSync(`${__dirname}/../data/db.json`);
    let movies = JSON.parse(rawdata);
    return movies.results;
}
const mockDataID = () => {
    let rawdata = fs.readFileSync(`${__dirname}/../data/dbid.json`);
    let movies = JSON.parse(rawdata);
    return movies.results;
}
