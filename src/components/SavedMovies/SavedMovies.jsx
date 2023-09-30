import React, { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Preloader from "../Preloader/Preloader";
import { searchMovies } from "../../utils/utils.js";
import mainApi from "../../utils/MainApi";

function SavedMovies(props) {
  const [filtredSavedMovies, setFiltredSavedMovies] = useState(
    props.savedMovies
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearchSavedMovies = (word) => {
    const isShort = JSON.parse(localStorage.getItem("savedCheckbox"));
    const rawMovies = props.savedMovies;
    setIsLoading(true);

    const filteredMovies = searchMovies(rawMovies, word, isShort);

    if (filteredMovies.length === 0) {
      setErrorMsg("Ничего не найдено");
      setFiltredSavedMovies([]);
      setIsLoading(false);
    } else {
      setErrorMsg("");
      setIsLoading(false);
      setFiltredSavedMovies(filteredMovies);
      localStorage.setItem("savedFiltered", JSON.stringify(filtredSavedMovies));
    }
  };

  useEffect(() => {
    setFiltredSavedMovies(props.savedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loggedIn]);

  //Удаление фильма
  const handleDeleteSavedMovie = (movie) => {
    const id =
      movie._id ||
      props.savedMovies.find((item) => item.movieId === movie.id)._id;
    mainApi
      .deleteMovie(id)
      .then(() => {
        setFiltredSavedMovies((items) => items.filter((c) => c._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header className="light" loggedIn={props.loggedIn} />
      <main className="movies">
        <SearchForm
          handleSearchMovies={handleSearchSavedMovies}
          movies={props.savedMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={filtredSavedMovies}
            onSaveClick={props.onSaveClick}
            onConfirmSaved={props.onConfirmSaved}
            onDeleteClick={props.onDeleteClick}
            onDeleteSavedMovie={handleDeleteSavedMovie}
          />
        )}
      </main>
      <div className="moviescard-list__error-notfound">{errorMsg}</div>
      <Footer />
    </>
  );
}

export default SavedMovies;
