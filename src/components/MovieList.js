import React from "react";
import "./MovieList.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieList(props) {
  const FavouriteComponent = props.FavouriteComponent;

  return (
    <div className="movie-list-display">
      {props.movies.map(({ Poster, Type, Title }, index) => (
        <div className="single-movie image-container" key={index}>
          <img src={Poster} alt="movies" />
          <div
            onClick={props.handleLikedClicks}
            className="overlay d-flex flex-column align-items-center justify-content-center"
          >
            <h2> Type: {Type} </h2>
            <h2> Title: {Title} </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
