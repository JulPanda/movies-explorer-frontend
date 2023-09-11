import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <h2 className="notfound__mistake">404</h2>
      <p className="notfound__text">Страница не найдена</p>
      <Link onClick={navigate(-1)} className="link notfound__link-back">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
