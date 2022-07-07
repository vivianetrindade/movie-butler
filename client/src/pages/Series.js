import React from "react";
import Serie from "../components/Serie";
import { useEffect, useState } from "react";

const Series = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:8080/api/v1/top250Tv`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSeries(data.items);
            // setSeries(data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <>
        <h2>Top 250 Series</h2>
        <section className="catalog">
            {series && series.map(serie => (
                <Serie key={serie.id} serie={serie} />
            ))}
        </section>
        </>
    );
}
export default Series;
