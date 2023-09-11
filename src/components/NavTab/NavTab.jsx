import React from "react";
import { NavLink } from "react-router-dom";

function NavTab() {
  return (
    <div className="navtab">
      <div className="navtab__menu">
        <NavLink to="#about-project" reloadDocument className="link navtab__link">
          О проекте
        </NavLink>
        <NavLink to="#techs" reloadDocument className="link navtab__link">
          Технологии
        </NavLink>
        <NavLink className="link navtab__link" to="#about-me" reloadDocument>
          Студент
        </NavLink>
      </div>
    </div>
  );
}

export default NavTab;
