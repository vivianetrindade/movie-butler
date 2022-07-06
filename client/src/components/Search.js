import React, {useState, useEffect} from "react";

const Search = ({onCatalogChange}) => {
    const [ search, setSearch ] = useState("action");
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/movies/${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            onCatalogChange(data.results);
            console.log(data.results);

        })
        .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        console.log("search: ", search);
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("search: ", search);
        fetch(`http://localhost:8080/api/v1/movies/${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            onCatalogChange(data.results);
            console.log(data.results);

        })
        .catch(err => console.log(err));
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