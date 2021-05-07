import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import Heading from "./components/Heading";
require("dotenv").config();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const apikey = process.env.REACT_APP_APIKEY;

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${apikey}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  const saveToLocalStorage = (favorites) => {
    localStorage.setItem(
      "react-movie-app-favorites",
      JSON.stringify(favorites)
    );
  };
  const addFavorite = (movie) => {
    if (!favorites.includes(movie)) {
      console.log(!favorites.includes(movie))
      const newFavorites = [...favorites, movie];
      alert(movie.Title);
      setFavorites(newFavorites);
      saveToLocalStorage(newFavorites);
    }
  };
  const removeFavorite = (movie) => {
    const newFavorites = favorites.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setFavorites(newFavorites);
    saveToLocalStorage(newFavorites);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  useEffect(() => {
    const oldFavorites = JSON.parse(
      localStorage.getItem("react-movie-app-favorites")
    );
    if (oldFavorites) {
      setFavorites(oldFavorites);
    }
  }, []);

  return (
    <div className="container movie-app">
      <div className='row d-flex align-items-center justify-content-center mt-4 mb-4'>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      {movies.length > 0 && (
        <div className="row">
          <Heading heading="Results" />
        </div>
      )}
      <div className="row">
        <MovieList movies={movies} handleFavoriteClick={addFavorite} />
      </div>
      {favorites.length > 0 && (
        <div className="row mt-5">
          <Heading heading="Watchlist" />
        </div>
      )}
      <div className="row">
        <MovieList
          movies={favorites}
          addOrRemove={1}
          handleFavoriteClick={removeFavorite}
        />
      </div>
    </div>
  );
};

export default App;
