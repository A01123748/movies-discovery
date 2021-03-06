import "../App.css";
import React, { useState, useMemo } from "react";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";
import useSearchMovies from "../hooks/useSearchMovies";
import useDebounce from "../hooks/useDebounce";

function Main() {
  const [text, setText] = useState("");
  const debouncedSearchTerm = useDebounce(text, 500);
  const data = useSearchMovies(debouncedSearchTerm);
  const [rating, setRating] = useState(0);
  const dispayedData = useMemo(
    () =>
      Object.entries(data).length !== 0
        ? data?.filter((movie) => {
            console.log("filter");
            return movie.vote_average >= rating * 2;
          })
        : data,
    [data]
  );

  return (
    <div className="App">
      <div className="App-header">
        <div className="Main">
          <SearchBar
            text={text}
            setText={setText}
            rating={rating}
            setRating={setRating}
          />
          <MoviesList results={dispayedData} rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default Main;
