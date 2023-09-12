import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </h2>
      <div className="footer__container">
        <ul className="footer__nav">
          <li>
            <a
              className="link footer__link"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="link footer__link"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
