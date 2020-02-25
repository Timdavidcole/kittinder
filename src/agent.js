import _superagent from "superagent";

const API_ROOT = "https://api.thecatapi.com/v1/";
const API_KEY = "a701ff7c-5713-41b4-b4e7-86671f2ce5a3";

const responseBody = res => res.body;

const requests = {
  get: (url, query) =>
    _superagent
      .get(`${API_ROOT}${url}`)
      .set("x-api-key", API_KEY)
      .query(query)
      .then(responseBody),
  post: (url, body) =>
    _superagent
      .post(`${API_ROOT}${url}`, body)
      .then(responseBody),
  put: (url, body) =>
    _superagent
      .put(`${API_ROOT}${url}`, body)
      .then(responseBody)
};

const Breeds = {
  all: (query) => requests.get(`breeds`, query)
};

const Images = {
  all: () => requests.get(`images/search`),
  get: query => requests.get(`images/search`, query)
};

export default {Breeds, Images};