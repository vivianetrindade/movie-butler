import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';


const WatchList = () => {
  const [list, setList] = useState([]);
  const { user } = useAuth0()
  const navigate = useNavigate();

  useEffect(()=> {
    fetch(`http://localhost:8080/api/favoritesmovies/${user.email}`)
    .then((res)=> res.json())
    .then(data => setList(data))
  }, [user.email])

  const handleRemove = (id, user) => {
    fetch(`http://localhost:8080/api/favoritesmovies/${id}/${user}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    const newList = list.filter(watched => watched._id !== id );
    setList(newList);
  }

  return (
    <section className="catalog__watchlist">
     {list && list.map(one => {
      return (
      <div className="watchlist" key={one._id}>
        <img className="movie__image" src={one.image} alt={one.title}/>
        <div className="moviefavorites__info">
          <h2>{one.title}</h2>
          <h3>{one.realeseYear} | {one.type} | {one.genres} | {one.runTimeStr}</h3>
          <h4>{one.rating}</h4>
          <p>Stars: {one.stars}</p>
          <p>{one.description}</p>
          <button onClick={() => handleRemove(one._id, one.user)}>Remove from WatchList</button>
        </div>
        
      </div>)
     })}
    </section>
  )
}
export default WatchList;