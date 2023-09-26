import React from "react";

function FilterCheckbox({ handleChangeCheckbox, valueChecked }) {
  return (
    <div className="checkbox">
      <label className="checkbox__content">
        <input
          type="checkbox"
          className="checkbox__input"
          checked={valueChecked}
          onChange={handleChangeCheckbox}
        ></input>
        <span className="checkbox__slider"></span>
      </label>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
