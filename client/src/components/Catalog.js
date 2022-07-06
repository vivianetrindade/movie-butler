import React from "react";
import Movie from "./Movie";

const Catalog = ({ movies = [{id:"tt1312171", 
                            image:"https://imdb-api.com/images/original/MV5BOTdlODM0MTAtMzRiZi00MTQxLWE0MGUtNTNjOGZjNjAzN2E0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7857_AL_.jpg",
                            title: "The Umbrella Academy",
                            imDbRating:"8.0"
                        }] }) => {
    return (
        <section className="catalog">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </section>
    );
}
export default Catalog;