var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", home);

function home(req, res, next) {
  res.render("index", {
    title: "Express",
    userName: "Nabanita",
  });
}

/* GET About page. 
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', userName: 'Nabanita' });
});

/* GET Projects page. 
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', userName: 'Nabanita' });
});*/

module.exports = router;
