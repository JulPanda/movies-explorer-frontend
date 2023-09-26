import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi.js";
import { searchMovies } from "../../utils/utils.js";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function handleSearchMovies(word) {
    const filteredMovies = JSON.parse(localStorage.getItem("filtered"));
    const isShort = JSON.parse(localStorage.getItem("checkbox"));
    setIsLoading(true);
    if (!filteredMovies) {
      moviesApi
        .getMovies()
        .then((movies) => {
          console.log(movies);
          localStorage.setItem("movies", JSON.stringify(movies));
          checkSearch(word, isShort);
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg("Сервер недоступен. Попробуйте позднее");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      checkSearch(word, isShort);
    }
  }

  const checkSearch = (word, isShort) => {
    const rawMovies = JSON.parse(localStorage.getItem("movies"));
    // const isShort = JSON.parse(localStorage.getItem("checkbox"));

    const filteredMovies = searchMovies(rawMovies, word, isShort);
    if (filteredMovies.length === 0) {
      setErrorMsg("Ничего не найдено");
      setMovies([]);
      setIsLoading(false);
    } else {
      setErrorMsg("");
      setIsLoading(false);
      setMovies(filteredMovies);
      localStorage.setItem("filtered", JSON.stringify(filteredMovies));
      localStorage.setItem("word", word);
      console.log(filteredMovies);
    }
  };

  //Восcтановить данные после обновления страницы /movies
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("filtered"));
    setMovies(movies || []);
  }, []);

  return (
    <>
      <Header className="light" loggedIn={props.loggedIn} />
      <main className="movies">
        <SearchForm handleSearchMovies={handleSearchMovies} movies={movies} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={props.savedMovies}
            errorMsg={errorMsg}
            onSaveClick={props.onSaveClick}
            onConfirmSaved={props.onConfirmSaved}
            onDeleteClick={props.onDeleteClick}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
