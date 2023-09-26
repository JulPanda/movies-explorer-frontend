import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";

import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth.js";

import {
  ERROR_INCORRECT_DATA,
  ERROR_CONFLICT,
  ERROR_UNAUTHORIZED,
  ERROR_NOT_FOUND,
  MESSAGE_INCORRECT_DATA,
  MESSAGE_CONFLICT,
  MESSAGE_SERVER,
  MESSAGE_UNAUTHORIZID,
  MESSAGE_NOT_FOUND,
  MESSAGE_UNAUTHORIZED_DATA,
} from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt"));
  const [userData, setUserData] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorRegister, setErrorRegister] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorProfile, setErrorProfile] = useState("");

  //Регистрация

  const handleRegister = ({ email, password, name }) => {
    auth
      .register(email, password, name)
      .then((res) => {
        setCurrentUser(res);
        handleLogin(email, password);
        navigate("/movies", { replace: true });
        setLoggedIn(true);
      })
      .catch((err) => {
        if (err === ERROR_CONFLICT) {
          setErrorRegister(MESSAGE_CONFLICT);
        }

        if (err === ERROR_INCORRECT_DATA) {
          setErrorRegister(MESSAGE_INCORRECT_DATA);
        } else {
          setErrorRegister(MESSAGE_SERVER);
        }
        console.log(err);
      });
  };

  //Авторизация

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data) {
          console.log(data);
          tokenCheck();
          setLoggedIn(true);
          localStorage.setItem("jwt", data._id);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        if (err === ERROR_INCORRECT_DATA) {
          setErrorLogin(MESSAGE_UNAUTHORIZED_DATA);
        }
        if (err === ERROR_UNAUTHORIZED) {
          setErrorLogin(MESSAGE_UNAUTHORIZID);
        }
        if (err === ERROR_NOT_FOUND) {
          setErrorLogin(MESSAGE_NOT_FOUND);
        } else {
          setErrorLogin(MESSAGE_SERVER);
        }
        console.log(err);
      });
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          setUserData(res);
          setLoggedIn(true);
          //console.log(loggedIn);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getCurrentUser()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi
        .getUserMovies()
        .then((data) => {
          console.log(data);
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const handleUpdateUser = ({ email, name }) => {
    mainApi
      .changeUserInfo({ email, name })
      .then((userData) => {
        setCurrentUser(userData);
        setErrorProfile("Информация обновлена!");
      })
      .catch((err) => {
        if (err === ERROR_INCORRECT_DATA) {
          setErrorProfile(MESSAGE_INCORRECT_DATA);
        } else {
          setErrorProfile(MESSAGE_SERVER);
        }
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setErrorProfile("");
        }, 500);
      });
  };

  //Подтверждение, что фильм в сохраненных
  const onConfirmSaved = (movie) => {    
    const isSaved = savedMovies.some((item) => item.movieId === movie.id);
    return isSaved;
  };

  //Сохранение фильма на странице /saved-movies
  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Удаление фильма
  const handleDeleteMovie = (movie) => {
    const id = movie._id || savedMovies.find((item) => item.movieId === movie.id)._id;
    mainApi
      .deleteMovie(id)
      .then(() => {
        setSavedMovies((items) => items.filter((c) => c._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                errorRegister={errorRegister}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login handleLogin={handleLogin} errorLogin={errorLogin} />
            }
          />
          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                signOut={handleSignOut}
                handleUpdateUser={handleUpdateUser}
                errorProfile={errorProfile}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                onSaveClick={handleSaveMovie}
                //savedMovies={savedMovies}
                onConfirmSaved={onConfirmSaved}
                onDeleteClick={handleDeleteMovie}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                //movies={savedMovies}
                savedMovies={savedMovies}
                onSaveClick={handleSaveMovie}
                onConfirmSaved={onConfirmSaved}
                onDeleteClick={handleDeleteMovie}
              />
            }
          />
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
