import React, { useState, useEffect } from "react";
import Catalog from "./Catalog";
 import LoadingSpinner from "./LoadingSpinner";

const SearchComponent = () => {
    const [ search, setSearch ] = useState("");
    const [movies, setMovies] = useState([{id:"tt1312171", 
    image:"https://imdb-api.com/images/original/MV5BOTdlODM0MTAtMzRiZi00MTQxLWE0MGUtNTNjOGZjNjAzN2E0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7857_AL_.jpg",
    title: "The Umbrella Academy",
    imDbRating:"8.0"
}]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      console.log("useEffect");
      fetch(`http://localhost:8080/api/v1/movies/action`)
      .then(res => res.json())
      .then(data => {
        console.log(data, "data");
          setMovies(data.results);
          setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  
    const onCatalogChange = (movies) => {
      setMovies(movies);
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/v1/movies/${search}`)
        .then(res => res.json())
        .then(data => {
            onCatalogChange(data.results);
        })
        .catch(err => console.log(err));
        setSearch("");
    }
    if  (isLoading) {
        return <LoadingSpinner />;
    }
    return (
        <>
        <section className="search">
            <h2>Search for your favorite genre</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Genre" value={search} onChange={handleChange} className='search__input'/>
        </form>
        </section>
        <section className="catalog">
            <Catalog movies={movies}/>
        </section>
        </>
    );
}
export default SearchComponent;