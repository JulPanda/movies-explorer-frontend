import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

function Profile({ loggedIn, signOut, handleUserChance }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const [isChangeProfile, setIsChangeProfile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //handleUserChance(values);
    setIsChangeProfile(false);
  };

  const handleChangeProfile = (e) => {
    e.preventDefault();
    setIsChangeProfile(true);
  };

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__input-container">
          <p className="profile__text">Имя</p>
          <input
            id="input-name"
            type="name"
            placeholder="Имя"
            name="name"
            className="profile__input"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            value={values.name || ""}
          />
        </div>
        <div className="profile__input-container profile__input-container_line">
          <p className="profile__text">E-mail</p>
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            name="email"
            className="profile__input"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            value={values.email || ""}
          />
        </div>
        {isChangeProfile ? (
          <div className="profile__footer">
            <span className="profile__error-message">Ошибка</span>
            <button className="profile__button-save" type="submit">
              Сохранить
            </button>
          </div>
        ) : (
          <div className="profile__footer">
            <button
              className="profile__button-change"
              onClick={handleChangeProfile}
            >
              Редактировать
            </button>
            <button className="profile__button-out" onClick={signOut}>
              <Link className="profile__button-link" to="/">Выйти из аккаунта</Link>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Profile;
