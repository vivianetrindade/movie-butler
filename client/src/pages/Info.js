import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Info = ( ) => {
    const [movie, setMovie] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const params = useParams();
    const movieId = params.id;

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/movies/byid/${movieId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMovie(data);
        })
        .catch(err => console.log(err));
    }, [movieId]);
    console.log(movie, 'info');

    const handleClick = () => {
        console.log('clicked')
        fetch('http://localhost:8080/api/favoritesmovies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(movie)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(error => setErrorMessage(error));
    }
    return (
        <section className="section__info">
        <h2>{movie.title}</h2>
        <div className="info">
            
            <img  className='movie__image' src={movie.image} alt={movie.title} />
            <div className="movie__desc">
                <p className='p'>Description: {movie.plot}</p> <br/>
                <p className='p'>Imdb Rating: {movie.imDbRating}</p> <br/>
                <p className='p'>Release year: {movie.year}</p>
                <p className='p'>Genres: {movie.genres}</p>
                <button  onClick={handleClick}>Add to want to watch</button>
            </div>
        </div>
        <div className="actors__info">
            {movie && movie.actorList && movie.actorList.map(actor => (
                <div className='container__actor'>
                    <img className='actor__img'src={actor.image} alt={actor.name} />
                    <p>{actor.name}</p>
                </div>
            ))} 
        </div>
        </section>
    );
}
export default Info;