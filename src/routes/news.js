var express = require("express");
var router = express.Router();

var newsController = require("../controllers/newsController");

router.post("/", function (req, res) {
    console.log(req.body)
    newsController.search(req, res);
})

module.exports = router; 