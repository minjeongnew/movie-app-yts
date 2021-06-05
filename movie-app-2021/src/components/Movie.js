import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, like, title, poster, rating, genres, runtime, summary, year}) {
  return (
    <div className="movie">
    {/*<a href={id} target="_blank">*/}
      <img src={poster} alt={title} titlt={title}></img>
      <p className="movie__year">
        <span>{year} 년도 개봉</span>
      </p>
    <div className="movie__data">

      <h3 className="movie__title">{
          title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
        }</h3>

      <p className="movie__genres">
        <span></span> {genres.join()}
      </p>
      <p className="p_info">영화 정보</p>
      <p className="movie__rating">
        <span>평점</span> {rating}
      </p>
      <p className="movie__like">
        <span>좋아요</span> {like}
      </p>

    <p className="movie__runtime">
      <span>러닝타임</span> {runtime}
    </p>
      <p className="p_summary">줄거리</p>
    <p className="movie__summary">
      <span></span> {summary}
    </p>
    </div>
  {/*</a>*/}
  </div>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired

};

export default Movie;
