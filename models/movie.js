var fetch = require("node-fetch");

const search = (searchStr) => {
  const OMDb_KEY = "9ed2556f";
  const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${searchStr}`;
  return fetch(url).then((response) => response.json());
};

module.exports = { search };
