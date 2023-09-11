import React from "react";

function AboutProject() {
  return (
    <div className="project-about" id="about-project">
      <h2 className="project-about__title">О проекте</h2>
      <ul className="cards">
        <li className="cards__item">
          <h3 className="cards__title">Дипломный проект включал 5 этапов</h3>
          <p className="cards__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="cards__item">
          <h3 className="cards__title">На выполнение диплома ушло 5 недель</h3>
          <p className="cards__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="schcedule">
        <p className="schcedule__time schcedule__time_green">1 неделя</p>
        <p className="schcedule__time schcedule__time_grey">4 недели</p>
        <p className="schcedule__title">Back-end</p>
        <p className="schcedule__title">Frond-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
