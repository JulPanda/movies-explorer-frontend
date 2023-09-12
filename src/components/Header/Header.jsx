import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className={`header header__theme header__theme_${props.className}`}>
      <div className="header__content">
        <NavLink to="/">
          <img src={logo} alt="Логотип" className="header__logo" />
        </NavLink>
        {props.loggedIn ? (
          <Navigation className={`${props.className}`} />
        ) : (
          <div className="header__user">
            <NavLink className="link header__user-register" to="/signup">
              Регистрация
            </NavLink>
            <NavLink to="/signin">
              <button type="button" className="header__user-entrance">
                Войти
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
