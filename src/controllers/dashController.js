var dashModel = require("../models/dashModel");

function trazer_dados(req, res) {
    var id_usuario = req.params.idServer;
        dashModel.trazer_dados(id_usuario)
            .then(
                function (resultadoAutenticar) {
                  res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function trazer_dados2(req, res) {
        dashModel.trazer_dados2()
            .then(
                function (resultadoAutenticar) {
                  res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {;
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


function dados_kpi1(req, res) {
    var id_usuario = req.params.idServer;
        dashModel.dados_kpi1(id_usuario)
            .then(
                function (resultadoAutenticar) {
                  console.log(resultadoAutenticar)
                  res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


function dados_kpi2(req, res) {
    var id_usuario = req.params.idServer;
        dashModel.dados_kpi2(id_usuario)
            .then(
                function (resultadoAutenticar) {
                  console.log(resultadoAutenticar)
                  res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
    function dados_kpi3(req, res) {
        var id_usuario = req.params.idServer;
            dashModel.dados_kpi3(id_usuario)
                .then(
                    function (resultadoAutenticar) {
                      console.log(resultadoAutenticar)
                      res.status(200).json(resultadoAutenticar)
                    }
                ).catch(
                    function (erro) {
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }


        function dados_kpi4(req, res) {
            dashModel.dados_kpi4()
            .then(
                function (resultadoAutenticar) {
                    console.log(resultadoAutenticar)
                    res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage)
                }
            )
        }

module.exports = {
    trazer_dados,
    trazer_dados2,
    dados_kpi1,
    dados_kpi2,
    dados_kpi3,
    dados_kpi4
}