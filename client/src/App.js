import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Search from './components/Search';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch(`http://localhost:8080/api/v1/movies/action`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
        setMovies(data.results);
    })
    .catch(err => console.log(err));
}, []);

  const onCatalogChange = (movies) => {
    console.log("catalogchange: ", movies);
    setMovies(movies);
  }

  return (
    <div className="App">
      <Header />
      <Search onCatalogChange={onCatalogChange}/>
      <Catalog movies={movies}/>
      <Footer />
    </div>
  );
}

export default App;
