import React from "react";

function Techs() {
  return (
    <div className="techs" id="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="tech-cards">
          <li className="tech-cards__item">HTML</li>
          <li className="tech-cards__item">CSS</li>
          <li className="tech-cards__item">JS</li>
          <li className="tech-cards__item">React</li>
          <li className="tech-cards__item">Git</li>
          <li className="tech-cards__item">Express.js</li>
          <li className="tech-cards__item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
