import React, { useState } from "react";

const Search = ({onCatalogChange}) => {
    const [ search, setSearch ] = useState("");
    console.log("rendering search: ", search);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit: ", search);
        fetch(`http://localhost:8080/api/v1/movies/${search}`)
        .then(res => res.json())
        .then(data => {
            onCatalogChange(data.results);
        })
        .catch(err => console.log(err));
        setSearch("");
    }

    return (
        <section className="search">
            <p>I have a search</p>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={search} onChange={handleChange}/>
        </form>
        
        </section>
    );
}
export default Search;