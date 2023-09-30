import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({ loggedIn, signOut, handleUpdateUser, errorProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [isChangeProfile, setIsChangeProfile] = useState(false);

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

  function handleNameChange(evt) {
    const input = evt.target;
    setName(input.value);
    setIsValidName(input.validity.valid);
    if (!isValidName) {
      setErrorName(input.validationMessage);
    } else {
      setErrorName("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = name || currentUser.name;
    const userEmail = email || currentUser.email;
    handleUpdateUser({ email: userEmail, name: userName });
    setIsChangeProfile(false);
  };

  const handleChangeProfile = (e) => {
    e.preventDefault();
    setIsChangeProfile(true);
  };

  useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);

  return (
    <>
      <Header className="light" loggedIn={loggedIn} />

      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form onSubmit={handleSubmit} className="profile__form" noValidate>
          <div className="profile__input-container profile__input-container_line">
            <p className="profile__text">Имя</p>
            <input
              id="input-name-profile"
              type="name"
              placeholder="Имя"
              name="name"
              className="profile__input"
              required
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              onChange={handleNameChange}
              value={name || ""}
              disabled={!isChangeProfile}
            />
          </div>
          <span className="profile__input-error">{errorName}</span>
          <div className="profile__input-container">
            <p className="profile__text">E-mail</p>
            <input
              id="input-email-profile"
              type="email"
              placeholder="Email"
              name="email"
              className="profile__input"
              required
              minLength="2"
              maxLength="30"
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              onChange={handleEmailChange}
              value={email || ""}
              disabled={!isChangeProfile}
            />
          </div>
          <span className="profile__input-error">{errorEmail}</span>

          <div className="profile__footer">
            <span className="profile__error-message">{errorProfile}</span>
            {isChangeProfile ? (
              <button
                className="profile__button-save"
                type="submit"
                disabled={!(isValidEmail || isValidName || name !== currentUser.name || email !== currentUser.email)}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__button-change"
                  type="button"
                  onClick={handleChangeProfile}
                >
                  Редактировать
                </button>
                <button className="profile__button-out" onClick={signOut}>
                  <Link className="profile__button-link" to="/">
                    Выйти из аккаунта
                  </Link>
                </button>
              </>
            )}
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
