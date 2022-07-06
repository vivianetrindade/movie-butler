import React from "react";

const Movie = ({ movie }) => {
    return (
        <section className="movie">
        <h2>{movie.title}</h2>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.imDbRating}</p>
        </section>
    );
}
export default Movie;