import React from "react";

import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
    <Header className="main" loggedIn={props.loggedIn} />    
    <main>      
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
    <Footer />
    </>
  );
}
  
export default Main;