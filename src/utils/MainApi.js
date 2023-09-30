import { MAIN_URL } from "./constants";
class MainApi {
  constructor(configApi) {
    this._url = configApi.url;
    this._headers = configApi.headers;
    this._credentials = configApi.credentials;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  getUserMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  getCurrentUser() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  saveMovie(item) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify(item),
    }).then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._handleResponse);
  }

  changeUserInfo({ email, name }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,

      body: JSON.stringify({
        email: email,
        name: name,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }
}

const mainApi = new MainApi({
  url: `${MAIN_URL}`,
  headers: {
    "content-type": "application/json",
  },
  credentials: "include",
});

export default mainApi;
