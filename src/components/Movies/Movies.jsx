import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreItem from "../MoreItem/MoreItem";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoreItem />
    </main>
  );
}

export default Movies;
