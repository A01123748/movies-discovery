import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ results }) => {
  const listItems = results.length ? (
    results?.map((movie, index) => <MovieCard {...movie} key={index} />)
  ) : (
    <></>
  );
  return <div className="MoviesList">{listItems}</div>;
};

export default MoviesList;
