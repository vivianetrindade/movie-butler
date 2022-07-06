import React from "react";

const Movie = ({ movie }) => {
    return (
        <section className="movie">
            <h2 className="movie__title">{movie.title}</h2>
            <img className="movie__image" src={movie.image} alt={movie.title} />
            <p className="movie__rating">{movie.imDbRating}</p>
        </section>
    );
}
export default Movie;