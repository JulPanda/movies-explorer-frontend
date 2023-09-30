import React, { useState} from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Register({ handleRegister, errorRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [errorName, setErrorName] = useState("");  
  const [errorEmail, setErrorEmail] = useState("");  
  const [errorPassword, setErrorPassword] = useState("");

   const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister({email, password, name});
  };

  function handleNameChange(evt) {
    const input = evt.target;
    setName(input.value);
    setIsValidName(input.validity.valid);
    if(!isValidName) {
        setErrorName(input.validationMessage)
    } else {
        setErrorName("");
    }
    }

    function handleEmailChange(evt) {
      const input = evt.target;
      setEmail(input.value);
      setIsValidEmail(input.validity.valid);
      if(!isValidEmail) {
          setErrorEmail(input.validationMessage)
      } else {
          setErrorEmail("");
      }
  }

  function handlePasswordChange(evt) {
      const input = evt.target;
      setPassword(input.value);
      setIsValidPassword(input.validity.valid);
      if(!isValidPassword) {
          setErrorPassword(input.validationMessage)
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
        <h2 className="login__title">Добро пожаловать!</h2>
      </div>

      <form onSubmit={handleSubmit} className="login__form" noValidate> 
        <p className="login__text">Имя</p>
        <input
          id="input-name-register"
          type="text"
          placeholder="Имя"
          name="name"
          className="login__input"
          required
          minLength="2"
          maxLength="30"
          pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,}$"
          onChange={handleNameChange}
          value={name || ""}
        />
        <span className="input__error-message input__error-message_red">{errorName}</span>
        <p className="login__text">E-mail</p>
        <input
          id="input-email-register"
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
        <span className="input__error-message input__error-message_red">{errorEmail}</span>
        <p className="login__text">Пароль</p>
        <input
          id="input-password-register"
          type="password"
          placeholder="Пароль"
          name="password"
          className="login__input"
          required
          onChange={handlePasswordChange}
          value={password || ""}
          autoComplete="on"
        />
        <span className="input__error-message input__error-message_red">
        {errorPassword}
        </span>
        <span className="register__error-message register__error-message_red">
          {errorRegister}
        </span>
        <button className="register__button" type="submit" disabled={!(isValidEmail && isValidPassword && isValidName)}>
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
