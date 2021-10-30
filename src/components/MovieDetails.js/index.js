import "../../App.css";
import React from "react";
import { Link, useParams } from "react-router-dom";

import { baseURLs, defaultImgUrl } from "../../constants";
import useMovieDetails from "../../hooks/useMovieDetails";
import StarRating from "../StarRating";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useMovieDetails(movieId);
  const src = movie.poster_path
    ? baseURLs.images + movie.poster_path
    : defaultImgUrl;

  return (
    <div className="App">
      <div className="App-header">
        <div className="Main">
          <div className="links">
            <Link to={"/"} className="link">
              Home
            </Link>
          </div>
          <div
            className="MovieDetails"
            style={{
              backgroundImage: movie.poster_path
                ? `url(${baseURLs.cover}${movie.poster_path})`
                : "linear-gradient(to right, rgba(45.1%, 62.75%, 65.1%, 1) 150px, rgba(45.1%, 62.75%, 65.1%, 0.84) 100%)",
            }}
          >
            <div className="img">
              <img src={src} alt={movie.title} />
            </div>
            <div className="details">
              <h1>
                {movie.title} (
                {movie.release_date
                  ? movie.release_date?.split("-")[0]
                  : movie.original_language?.toUpperCase()}
                )
              </h1>
              {movie.genres?.length > 0 ? (
                <p>
                  Genres:
                  {movie.genres?.map((genre) => ` ${genre.name}`)}
                </p>
              ) : (
                <></>
              )}
              <p>Status: {movie.status}</p>
              <p>Duration: {movie.runtime} min</p>
              <StarRating rating={movie.vote_average / 2} disabled />
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
