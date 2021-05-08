var express = require("express");
var router = express.Router();

// Controllers
var movieController = require("../controllers/movieController");

router.get("/search", movieController.getMovieListBySearchStr);

router.get("/getDetails/:title", movieController.getMovieByTitle);

router.get("/", function (req, res, next) {
  res.render("movies", { movies: [], searchStr: "" });
});

module.exports = router;
