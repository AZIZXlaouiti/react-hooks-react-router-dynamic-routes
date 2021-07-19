import React from 'react'
import { Link } from "react-router-dom";
export default function MoviesList({movies}) {
    const renderMovies = Object.keys(movies).map((moviesId)=>(
        <li key={moviesId}>
            <Link to={`/movies/${moviesId}`}>{movies[moviesId].title} </Link>
        </li>
    ));
    return <ul>{renderMovies}</ul>

}

