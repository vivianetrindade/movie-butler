import React from "react";
import {useNavigate} from "react-router-dom";

const Serie = ({ serie }) => {
    const navigate = useNavigate();
    return (
        <section className="movie" onClick={() => navigate(`/info/${serie.id}`)}>
            
            <img className="movie__image" src={serie.image} alt={serie.title} />
            <div className="movie__info">
                <p className="movie__title">{serie.title}</p>
                <p className="movie__rating">{serie.imDbRating}</p>
            </div>
        </section>
    );
}
export default Serie;