import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";


const WatchList = () => {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(()=> {
    fetch('http://localhost:8080/api/favoritesmovies')
    .then((res)=> res.json())
    .then(data => setList(data))
  }, [])

  return (
    <section className="catalog__watchlist">
     {list && list.map(one => {
      return (
      <div className="watchlist" key={one._id} onClick={() => navigate(`/info/${one.filmId}`)}>
        <img className="movie__image" src={one.image} alt={one.title}/>
        <div className="moviefavorites__info">
          <h2>{one.title}</h2>
          <h3>{one.realeseYear} | {one.type} | {one.genres} | {one.runTimeStr}</h3>
          <h4>{one.rating}</h4>
          <p>Stars: {one.stars}</p>
          <p>{one.description}</p>
          <button>Remove from WatchList</button>
        </div>
        
      </div>)
     })}
    </section>
  )
}
export default WatchList;