import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function BurgerMenu({ isMenuOpen, onClose }) {
  const location = useLocation();

  return (
    <div
      className={`popup popup__burger-menu ${isMenuOpen ? `popup_opened` : ``}`}
    >
      <div className="popup__content">
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
        />
        <nav className="popup__nav">
          <NavLink
            to="/"
            className={`link popup__nav-link ${
              location.pathname === "/" ? "popup__nav-link_active" : ""
            }`}
            onClick={onClose}
          >
            Главная
          </NavLink>
          <NavLink
            className={`link popup__nav-link ${
              location.pathname === "/movies" ? "popup__nav-link_active" : ""
            }`}
            to="/movies"
            onClick={onClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            className={`link popup__nav-link ${
              location.pathname === "/saved-movies" ? "popup__nav-link_active" : ""
            }`}
            to="/saved-movies"
            onClick={onClose}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
