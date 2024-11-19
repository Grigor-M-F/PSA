var express = require("express");
var router = express.Router();

var newsController = require("../controllers/newsController");

router.post("/news", function (req, res) {
    newsController.search(req, res);
})

module.exports = router;