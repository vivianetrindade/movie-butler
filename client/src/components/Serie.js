import React from "react";
import {useNavigate} from "react-router-dom";

const Serie = ({ serie }) => {
    const navigate = useNavigate();
    return (
        <section className="movie">
            
            <img className="movie__image" src={serie.image} alt={serie.title} />
            <div className="movie__info">
            <p className="movie__title">{serie.title}</p>
            <p className="movie__rating">{serie.imDbRating}</p>
            </div>
            <div className="movie__buttons">

                <button className="movie__button" onClick={() => navigate(`/info/${serie.id}`)}>More info...</button>
            </div>
        </section>
    );
}
export default Serie;