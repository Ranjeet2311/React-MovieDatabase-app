import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieListSearch(props) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        value={props.value}
        onChange={(event) => props.setTextSearch(event.target.value)}
        placeholder="Search Here"
      />
    </div>
  );
}

export default MovieListSearch;
