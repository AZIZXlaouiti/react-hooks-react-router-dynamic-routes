import React from 'react'
import { useParams } from "react-router-dom";

function MovieShow({movies}) {
  const params = useParams();
  console.log("params",params);
    return (
        <div>
            <h3>Movies Show component!</h3>
            <h3>{movies[params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow
