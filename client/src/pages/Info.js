import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Info = ( ) => {
    const [movie, setMovie] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState({})

    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    const params = useParams();
    const movieId = params.id;
    console.log(movieId, 'movie');

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/movies/byid/${movieId}`)
        .then(res => res.json())
        .then(data => {
            const dataWithuser = {...data, userMail: user.email }
            setMovie(dataWithuser);
        })
        .catch(err => console.log(err));
    }, [movieId]);
    

    const handleClick = () => {
        console.log('clicked');
        
        if(isAuthenticated){
            fetch('http://localhost:8080/api/favoritesmovies', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(movie)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setStatus({success: true, message: 'Movie or serie added to watch list.'})
                } else {
                    setStatus({ success: false, message: 'Something went wrong, please try again later.'})
                }
            })
            .catch(error => setErrorMessage(error));
        } else {
            loginWithRedirect();
        }
    }
    console.log(movie, 'info');
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
                {status.message && 
                <div>
                    <p>{status.message}</p>
                </div>}
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