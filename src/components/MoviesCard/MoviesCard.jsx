import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(true);
  const location = useLocation();
  /*const cardSavedButtonClassName = `element__button-saved ${
    isSaved && "element__button-saved_active"
  }`;*/
  const cardSavedButtonClassName = isSaved
    ? `element__button-saved_active`
    : `element__button-saved`;

  return (
    <section className="element-card">
      <li className="element">
        <img
          className="element__image"
          src={`${props.image}`}
          alt="Фотография фильма"
        />
        <div className="element__block">
          <div className="element__text-block">
            <h2 className="element__title">33 слова о дизайне</h2>
            <p className="element__duration">1ч42м</p>
          </div>
          <button
            className={
              `${location.pathname === "/saved-movies"}`
                ? "element__close-button-saved-movies"
                : `${cardSavedButtonClassName}`
            }
            type="button"
            aria-label="Сохраненный фильм"
            //onClick={}
          ></button>
        </div>
      </li>
    </section>
  );
}
export default MoviesCard;
