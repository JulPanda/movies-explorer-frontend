import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login({ handleLogin, errorLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(email, password);
  };

  function handleEmailChange(evt) {
    const input = evt.target;
    setEmail(input.value);
    setIsValidEmail(input.validity.valid);
    if (!isValidEmail) {
      setErrorEmail(input.validationMessage);
    } else {
      setErrorEmail("");
    }
  }

  function handlePasswordChange(evt) {
    const input = evt.target;
    setPassword(input.value);
    setIsValidPassword(input.validity.valid);
    if (!isValidPassword) {
      setErrorPassword(input.validationMessage);
    } else {
      setErrorPassword("");
    }
  }

  return (
    <main className="login">
      <div className="login__header">
        <Link to="/" className="login__header-link">
          <img src={logo} alt="Логотип" className="login__header-logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
      </div>

      <form onSubmit={handleSubmit} className="login__form" noValidate>
        <p className="login__text">E-mail</p>
        <input
          id="input-email-login"
          type="email"
          placeholder="Email"
          name="email"
          className="login__input"
          required
          minLength="2"
          maxLength="30"
          pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
          onChange={handleEmailChange}
          value={email || ""}
        />
        <span className="input__error-message input__error-message_red">
          {errorEmail}
        </span>
        <p className="login__text">Пароль</p>
        <input
          id="input-password-login"
          type="password"
          placeholder="Пароль"
          name="password"
          className="login__input"
          required
          onChange={handlePasswordChange}
          value={password || ""}          
        />
        <span className="input__error-message input__error-message_red">
          {errorPassword}
        </span>
        <span className="login__error-message login__error-message_red">
          {errorLogin}
        </span>
        <button
          className="login__button"
          type="submit"
          disabled={!(isValidEmail && isValidPassword)}          
        >
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
