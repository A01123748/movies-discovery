import React from "react";
import { Link } from "react-router-dom";

import { baseURLs, defaultImgUrl } from "../constants";

const MovieCard = (movie) => {
  const src = movie.poster_path
    ? baseURLs.images + movie.poster_path
    : defaultImgUrl;
  return (
    <div className="MovieCard" key={movie.id}>
      <Link to={`details/${movie.id}`}>
        <img src={src} alt={movie.title} />
        {!movie.poster_path && <p>{movie.title}</p>}
      </Link>
    </div>
  );
};

export default MovieCard;
