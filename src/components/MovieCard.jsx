import React from "react";
import "./style/MovieCard.css";
import moment from "moment";
import "moment-timezone";
import CircularProgess from './CircularProgessbar';
const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  let date = movie.release_date;
  let resultDate = moment(date).format("D  MMMM YYYY ");

  return (
    <div>
    <div className="progressBar">
    <CircularProgess movie={movie}/>

    </div>

      <div className="movie-card">

        {movie.poster_path ? (
          <img
            className={"movie-image"}
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt=""
          />
        ) : null}
        <div className="movie-info">
          <div className="movie-title">
            <h5>{movie.title}</h5>
            <p> {resultDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
