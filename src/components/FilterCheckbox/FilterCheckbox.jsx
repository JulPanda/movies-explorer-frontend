import React, { useState } from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="checkbox">
      <label className="checkbox__content">
        <input
          type="checkbox"
          className="checkbox__input"
          checked={checked}
          onChange={handleChange}
        ></input>
        <span className="checkbox__slider"></span>
      </label>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
