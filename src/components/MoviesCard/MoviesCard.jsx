import React from "react";
import { useLocation, Link } from "react-router-dom";
import { MOVIES_URL, HOUR } from "../../utils/constants.js";

function MoviesCard({ movie, onSaveClick, onDeleteClick, onConfirmSaved }) {
  const location = useLocation();
  const isSaved = onConfirmSaved(movie);
  const cardSavedButtonClassName = `element__button-saved ${
    isSaved && "element__button-saved_active"
  }`;

  const handleMovieSavedClick = () => {
    onSaveClick({
      country: movie.country,
      director: movie.director,
      duration: String(movie.duration),
      year: movie.year,
      description: movie.description,
      image: MOVIES_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    });
  };

  const handleMovieDeleteClick = () => {
    onDeleteClick(movie);
  };

  return (
    <section className="element-card">
      <li className="element" key={movie.id || movie._id}>
        <Link to={movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="element__image"
            src={
              location.pathname === "/movies"
                ? `${MOVIES_URL}${movie.image.url}`
                : movie.image
            }
            alt={movie.nameRU}
          />
        </Link>
        <div className="element__block">
          <div className="element__text-block">
            <h2 className="element__title">{movie.nameRU}</h2>
            <p className="element__duration">{`${Math.floor(
              parseFloat(movie.duration) / HOUR
            )}ч${parseFloat(movie.duration) % HOUR}м`}</p>
          </div>

          <button
            className={
              location.pathname === "/movies"
                ? `${cardSavedButtonClassName}`
                : "element__close-button-saved-movies"
            }
            type="button"
            aria-label="Сохраненный фильм"
            onClick={
              location.pathname === "/movies"
                ? isSaved
                  ? handleMovieDeleteClick
                  : handleMovieSavedClick
                : handleMovieDeleteClick
            }
          ></button>
        </div>
      </li>
    </section>
  );
}
export default MoviesCard;
