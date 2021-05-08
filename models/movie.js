var fetch = require("node-fetch");

const OMDb_KEY = "9ed2556f";

exports.searchByStr = (searchStr) => {
  const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${searchStr}`;
  return fetch(url).then((response) => response.json());
};

exports.searchByTitle = (title) => {
  const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&t=${title}`;
  return fetch(url).then((response) => response.json());
};
