const OMDb_KEY = "9ed2556f";

/**
 * Pesquisa filmes no serviço OMDb.
 * Pedido GET autenticado com uma API Key
 *
 * @param {String} searchText	Texto a utilizar na pesquisa.
 *
 * @return {Promise} JSON com o resultado da pesquisa.
 */
const searchMovies = (searchText) => {
  const OMDb_KEY = "9ed2556f";
  const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${searchText}`;
  return fetch(url).then((response) => response.json());
};

/**
 * Cria elemento DOM para representar um filme.
 * Uma div envolve um h1 e uma imagem.
 *
 * @param {Object} movie	Contém todos os atributos do filme devolvidos pela API.
 *
 * @return {Element} Elemento DOM que representa o filme.
 */
const createMovieRow = (movie) => {
  const {
    Title: title,
    Poster: poster_url,
    Type: category,
    Year: year,
  } = movie;

  const movieNode = document.createElement("div");

  const titleNode = document.createElement("h1");
  titleNode.innerHTML = title + " - " + year;

  const posterDiv = document.createElement("div");
  const posterNode = document.createElement("img");
  posterNode.src = poster_url == "N/A" ? "./transferir.png" : poster_url;

  movieNode.appendChild(titleNode);
  movieNode.appendChild(posterNode);

  return movieNode;
};

/**
 * Pesquisa um filme e atualiza o interface.
 * A API é chamada e, em caso de sucesso, os elementos do rootElement são substituídos
 *
 * @param {String} searchText	Texto a utilizar na pesquisa.
 *
 * @param {Element} rootElement	Elemento HTML para apresentar os resultados.
 */
const handleFormSubmit = (searchText, rootElement) => {
  searchMovies(searchText).then(({ Search: search }) => {
    console.log(search);
    rootElement.innerHTML = "";
    search.map(createMovieRow).map((elem) => rootElement.appendChild(elem));
  });
};

const rootElement = document.getElementById("root");
const searchFormElement = document.getElementById("searchForm");

searchFormElement.addEventListener("submit", (event) => {
  const searchText = searchFormElement.elements.search.value;

  handleFormSubmit(searchText, rootElement);
  // ...

  event.preventDefault();
});
