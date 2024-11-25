var dashModel = require("../models/dashModel");

function trazer_dados(req, res) {
        dashModel.trazer_dados()
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

// function trazer_dados2(req, res) {
//     // console.log("chegamos na controller")
//         dashModel.trazer_dados2()
//             .then(
//                 function (resultadoAutenticar) {
//                 //   console.log(resultadoAutenticar)
//                   res.status(200).json(resultadoAutenticar)
//                 }
//             ).catch(
//                 function (erro) {
//                     // console.log(erro);
//                     // console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }


function dados_kpi1(req, res) {
        dashModel.dados_kpi1()
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
        dashModel.dados_kpi2()
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
            dashModel.dados_kpi3()
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


module.exports = {
    trazer_dados,
    dados_kpi1,
    dados_kpi2,
    dados_kpi3
}