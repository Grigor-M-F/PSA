var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");


router.get("/trazer_dados",  function (req, res){
  dashController.trazer_dados(req,res);
})

// router.get("/trazer_dados2",  function (req, res){
//   dashController.trazer_dados2(req,res);
// })

router.get("/dados_kpi1",  function (req, res){
  dashController.dados_kpi1(req,res);
})

router.get("/dados_kpi2",  function (req, res){
  dashController.dados_kpi2(req,res);
})

router.get("/dados_kpi3",  function (req, res){
  dashController.dados_kpi3(req,res);
})

  module.exports = router;