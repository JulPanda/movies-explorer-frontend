import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ handleSearchMovies }) {
  const [word, setWord] = useState("");
  const [isValidWord, setIsValidWord] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isShort, setIsShort] = useState(false);
  const location = useLocation();

  const handleChangeCheckbox = (evt) => {
    // const value = !isShort;
    setIsShort(!isShort);
    if (location.pathname === "/movies") {
      localStorage.setItem("checkbox", JSON.stringify(!isShort));
    } else {
      localStorage.setItem("savedCheckbox", JSON.stringify(!isShort));
    }
    handleSearchMovies(word, isShort);
  };

  const handleChangeSearch = (e) => {
    const input = e.target;
    setWord(input.value);
    setIsValidWord(input.validity.valid);
    console.log(input.validity.valid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidWord) {
      setErrorMessage("Нужно ввести ключевое слово");
    } else {
      handleSearchMovies(word, isShort);
      setErrorMessage("");
      if (location.pathname === "/movies") {
        localStorage.setItem("word", word);
      } else {
        localStorage.setItem("savedWord", word);
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/movies") {
      const restoredWord = localStorage.getItem("word");
      setWord(restoredWord);
      const restoredCheckbox = JSON.parse(localStorage.getItem("checkbox"));
      setIsShort(restoredCheckbox);
    }
  }, []);

  return (
    <section className="searchform">
      <div className="searchform__content">
        <form onSubmit={handleSubmit} className="searchform__form" noValidate>
          <input
            id="input-movies"
            type="text"
            placeholder="Фильм"
            name="word"
            className="searchform__input"
            required
            onChange={handleChangeSearch}
            value={word || ""}
          />
          <button className="button searchform__button" type="submit"></button>
        </form>
        <span className="searchform__error-message">{errorMessage}</span>
        <FilterCheckbox
          handleChangeCheckbox={handleChangeCheckbox}
          valueChecked={isShort}
        />
      </div>
    </section>
  );
}

export default SearchForm;
