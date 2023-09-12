import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navigation">
        <nav className="navigation__nav">
          <NavLink
            className={`link navigation__nav-link navigation__nav-link_${props.className}`}
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className={`link navigation__nav-link navigation__nav-link_${props.className}`}
            to="/saved-movies"
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <NavLink className="header__user header__user_text" to="/profile">
          <button className="header__user-profile">Аккаунт</button>
        </NavLink>
      </div>
      <button
        className="button header__menu-burger header__menu-burger_inv"
        onClick={handleOpenMenu}
      >
        <div
          alt="Кнопка бургер меню"
          className={`header__button-image_${props.className}`}
        ></div>
      </button>

      <BurgerMenu isMenuOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default Navigation;
