import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import logo from "../../images/logo.svg";

function Register({ handleRegister }) {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  return (
    <main className="login">
      <div className="login__header">
        <Link to="/" className="login__header-link">
          <img src={logo} alt="Логотип" className="login__header-logo" />
        </Link>
        <h2 className="login__title">Добро пожаловать!</h2>
      </div>

      <form onSubmit={handleSubmit} className="login__form">
      <p className="login__text">Имя</p>
        <input
          id="input-name"
          type="name"
          placeholder="Имя"
          name="name"
          className="login__input"
          required
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.name || ""}
        />
        <span className="input__error-message input__error-message_red"></span>
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
        <span className="input__error-message input__error-message_red">Что-то пошло не так...</span>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
        <p className="login__footer-text">          
          Уже зарегистрированы? 
          <Link to="/signin" className="link login__footer-link">
            Войти
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Register;
