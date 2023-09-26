import React, { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Preloader from "../Preloader/Preloader";
import { searchMovies } from "../../utils/utils.js";

function SavedMovies(props) {
  const [filtredSavedMovies, setFiltredSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearchSavedMovies = (word, isShort) => {
    //const isShort = JSON.parse(localStorage.getItem("SavedCheckbox"));

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
      localStorage.setItem("savedFiltered", JSON.stringify(filteredMovies));
    }
  };

  //Восcтановить данные после обновления страницы /movies
// useEffect(() => {   
//     setFiltredSavedMovies(filtredSavedMovies)
//   }, [filtredSavedMovies]);

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
            //movies={props.savedMovies}
            movies={filtredSavedMovies}
            savedMovies={props.savedMovies}
            onSaveClick={props.onSaveClick}
            onConfirmSaved={props.onConfirmSaved}
            onDeleteClick={props.onDeleteClick}
            handleSearchMovies={props.handleSearchMovies}
          />
        )}
      </main>
      <div className="moviescard-list__error-notfound">{errorMsg}</div>
      <Footer />
    </>
  );
}

export default SavedMovies;
