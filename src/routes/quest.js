var express = require("express");
var router = express.Router();

router.post("/form", function (req, res) {
    usuarioController.registro(req, res);
});

module.exports = router;