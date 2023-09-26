import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import MoreItem from "../MoreItem/MoreItem";

import {
  MAX_MOVIES_L,
  MAX_MOVIES_XL,
  MAX_MOVIES_M,
  MAX_MOVIES_S,
  ADD_AMOUNT_L,
  ADD_AMOUNT_M,
  ADD_AMOUNT_S,
} from "../../utils/constants";
import useResize from "../../hooks/useResize";

function MoviesCardList(props) {
  const [maxMovies, setMaxMovies] = useState(0);
  const [addedMovies, setAddedMovies] = useState(0);
  const location = useLocation();
  const width = useResize();

  const moviesPage = location.pathname === "/movies";
  //const moviesSavedPage = location.pathname === "/saved-movies";

  useEffect(() => {    
    if (width >= 1298) {
      setMaxMovies(MAX_MOVIES_XL);
      setAddedMovies(ADD_AMOUNT_L);
    } else if (width >= 1006) {
      setMaxMovies(MAX_MOVIES_L);
      setAddedMovies(ADD_AMOUNT_M);
    } else if (width >= 650) {
      setMaxMovies(MAX_MOVIES_M);
      setAddedMovies(ADD_AMOUNT_S);
    } else {
      setMaxMovies(MAX_MOVIES_S);
      setAddedMovies(ADD_AMOUNT_S);
    }
  }, [width]);

  const handleAddedMovies = (e) => {
    setMaxMovies(maxMovies + addedMovies);
  };

  return (
    <>
      <section className="moviescard-list">
        {props.movies.map((movie, index) => {
          if (moviesPage) {
            if (index < maxMovies) {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id || movie._id}
                  onSaveClick={props.onSaveClick}
                  onConfirmSaved = {props.onConfirmSaved}
                  onDeleteClick = {props.onDeleteClick}
                  
                />
              );
            }
          } else {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id || movie._id}
                onSaveClick={props.onSaveClick}
                onConfirmSaved = {props.onConfirmSaved}
                onDeleteClick = {props.onDeleteClick}
                movies={props.movies}
                
              />
            );
          }
          return null;
        })}
      </section>
      <div className="moviescard-list__error-notfound">{props.errorMsg}</div>

      {moviesPage && maxMovies < props.movies.length && (
        <MoreItem handleAddedMovies={handleAddedMovies} />
      )}
    </>
  );
}

export default MoviesCardList;
