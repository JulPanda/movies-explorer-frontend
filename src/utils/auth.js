import { MAIN_URL } from "./constants";

// export const BASE_URL = "https://auth.nomoreparties.co";
// export const BASE_URL = "http://localhost:3003";
//export const BASE_URL ="https://api.jul-mesto.nomoreparties.co";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);  
}

function request(url, options) {
  return fetch(`${MAIN_URL}${url}`, options).then(checkResponse);
}

export const register = (email, password, name) => {
  return request(`/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password, name }),
  });
};

export const authorize = (email, password) => {
  return request(`/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = (token) => {
  return request(`/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",      
    },
    credentials: "include",
  });
};
