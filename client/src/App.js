import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import Info from './pages/Info';
import WatchList from './pages/WatchList'
//import SearchComponent from './components/SearchComponent';
// import { useState, useEffect } from 'react';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/info/:id" element={<Info />}></Route>
          <Route path='/wanttowatch' element={<WatchList/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
