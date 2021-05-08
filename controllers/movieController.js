const movie = require("../models/movie");

exports.getMovieListBySearchStr = function (req, res) {
  if (req.query.search == null || req.query.search == "") {
    res.render("error", {
      message: "Search string is empty!",
      error: { status: "404", stack: "" },
    });
  }
  movie.searchByStr(req.query.search).then(({ Search: search }) => {
    res.render("movies", { movies: search, searchStr: req.query.search });
  });
};

exports.getMovieByTitle = function (req, res) {
  if (req.params.title == null || req.params.title == "") {
    res.render("error", {
      message: "Search string is empty!",
      error: { status: "404", stack: "" },
    });
  }
  movie.searchByTitle(req.params.title).then((response) => {
    console.log(response);
    res.render("movie_details", { movie: response });
  });
};
