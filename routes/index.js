var express = require("express");
var router = express.Router();

// Controllers
var movieController = require("../controllers/movieController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/search", movieController.getMovieListBySearchStr);

module.exports = router;
