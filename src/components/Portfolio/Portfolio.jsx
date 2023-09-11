import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio-link__list">
        <li className="portfolio-link__item portfolio-link__item_line">
          <Link
            className="link portfolio-link__item_text"
            to="https://github.com/JulPanda/how-to-learn"
            target="_blank"
            alt="Ссылка на статичный сайт"
          >
            Статичный сайт
          </Link>
          <p className="link portfolio-link__item_arrow">&#8599;</p>
        </li>
        <li className="portfolio-link__item portfolio-link__item_line">
          <Link
            className="link portfolio-link__item_text"
            to="https://github.com/JulPanda/russian-travel"
            target="_blank"
            alt="Ссылка на статичный сайт"
          >
            Адаптивный сайт
          </Link>
          <p className="link portfolio-link__item_arrow">&#8599;</p>
        </li>
        <li className="portfolio-link__item">
          <Link
            className="link portfolio-link__item_text"
            to="https://github.com/JulPanda/react-mesto-api-full-gha"
            target="_blank"
            alt="Ссылка на статичный сайт"
          >
            Одностраничное приложение
          </Link>
          <p className="link portfolio-link__item_arrow">&#8599;</p>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
