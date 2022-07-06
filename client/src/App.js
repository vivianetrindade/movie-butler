import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Search from './components/Search';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

  const onCatalogChange = (movies) => {
    console.log("movies: ", movies);
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
