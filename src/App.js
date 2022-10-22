import { useState, useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCards";

const API_URL = "http://www.omdbapi.com/?apikey=ccc301fb";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchMovies = async (searchTerm) => {
    const response = await fetch(API_URL + "&s=" + searchTerm);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={() => searchMovies(searchValue)}
        />
      </div>

      {movies.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
