import { MOVIES_URL } from "./constants";
class MoviesApi {
  constructor(configApi) {
    this._url = configApi.url;
    this._headers = configApi.headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  url: `${MOVIES_URL}/beatfilm-movies`,
  headers: {
    "content-type": "application/json",    
  },
});

export default moviesApi;
