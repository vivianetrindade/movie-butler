import React from "react";
import {useNavigate} from "react-router-dom";

const Movie = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <section className="movie" onClick={() => navigate(`/info/${movie.id}`)}>
            
            <img className="movie__image" src={movie.image} alt={movie.title} />
            <div className="movie__info">
                <h3 className="movie__title">{movie.title}</h3>
                <span className="movie__rating">{movie.imDbRating}</span>
            </div>
        </section>
    );
}
export default Movie;