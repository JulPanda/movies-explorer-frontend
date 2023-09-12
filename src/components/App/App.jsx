import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  // const handleRegister = () => {}
  // const handleLogin = () => {}

  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={<Register /*handleRegister={handleRegister} */ />}
        />
        <Route
          path="/signin"
          element={<Login /*handleLogin={handleLogin} */ />}
        />
        <Route
          path="/profile"
          element={
            <>
              <Header className="light" loggedIn={loggedIn} />
              <Profile /*loggedIn={loggedIn} signOut={handleSignOut} */ />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header className="main" loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header className="light" loggedIn={loggedIn} />
              <Movies loggedIn={loggedIn} />
              <Footer />
            </>
          }
        />
         <Route
          path="/saved-movies"
          element={
            <>
              <Header className="light" loggedIn={loggedIn} />
              <Movies loggedIn={loggedIn} />
              <Footer />
            </>
          }
        />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
