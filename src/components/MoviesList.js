import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ results }) => {
  const listItems =
    results?.length > 0 ? (
      results?.map((movie, index) => <MovieCard {...movie} key={index} />)
    ) : (
      <div className="EmptyMoviesList">
        <p>No movies found</p>
      </div>
    );
  return <div className="MoviesList">{listItems}</div>;
};

export default MoviesList;
