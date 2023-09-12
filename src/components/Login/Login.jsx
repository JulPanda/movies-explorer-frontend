import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import logo from "../../images/logo.svg";

function Login({ handleLogin }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <main className="login">
      <div className="login__header">
        <Link to="/" className="login__header-link">
          <img src={logo} alt="Логотип" className="login__header-logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
      </div>

      <form onSubmit={handleSubmit} className="login__form">        
        <p className="login__text">E-mail</p>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          name="email"
          className="login__input"
          required
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.email || ""}
        />
        <span className="input__error-message input__error-message_red"></span>
        <p className="login__text">Пароль</p>
        <input
          id="input-password"
          type="password"
          placeholder="Пароль"
          name="password"
          className="login__input"
          required
          onChange={handleChange}
          value={values.password || ""}
        />
        <span className="input__error-message input__error-message_red">
          Что-то пошло не так...
        </span>
        <button className="login__button" type="submit">
          Войти
        </button>
        <p className="login__footer-text">
          Еще не зарегистрированы?
          <Link to="/signup" className="link login__footer-link">
            Регистрация
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
