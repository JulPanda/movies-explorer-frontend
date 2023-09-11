import React from "react";

import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";

function Main() {
  return (
    <main>      
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
  
export default Main;