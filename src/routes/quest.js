var express = require("express");
var router = express.Router();

var questController = require("../controllers/questController")

router.post("/", function (req, res) {
    questController.enviar(req, res);
});

module.exports = router;