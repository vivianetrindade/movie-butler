import React from "react";
import Movie from "../components/Movie";
// import Search from "../components/SearchComponent";
import { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      console.log("useEffect");
      
      fetch(`http://localhost:8080/api/v1/top250movies`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
          setMovies(data.items);
          // setMovies(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
    <h2>Top 250 Movies</h2>
    <section className="catalog">
      {movies && movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
    </>
  );
}
export default Movies;