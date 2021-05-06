import React from "react";
import AddToFavorites from "./AddToFavorites";

const MovieList = (props) => {
  const handleFavoriteClick = props.handleFavoriteClick;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => handleFavoriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <AddToFavorites addOrRemove={props.addOrRemove} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
