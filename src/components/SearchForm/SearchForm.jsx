import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <section className="searchform">
      <div className="searchform__content">
        <form onSubmit={handleSubmit} className="searchform__form">
          <input
            id="input-movies"
            type="text"
            placeholder="Фильм"
            name="search"
            className="searchform__input"
            required
            onChange={handleChange}
            value={""}
          />
          <button className="button searchform__button" type="submit"></button>
        </form>
        <FilterCheckbox />        
      </div>
    </section>
  );
}

export default SearchForm;
