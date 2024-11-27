var questModel = require("../models/questModel");

function enviar(req, res) {

    var forca = req.body.forcaServer;
    var resistencia = req.body.resistenciaServer;
    var velocidade = req.body.velocidadeServer;
    var recuperacao = req.body.recuperacaoServer;
    var lesao = req.body.lesaoServer;
    var saudeMental = req.body.saudeMentalServer;
    var fadiga = req.body.fadigaServer;
    var tmb = req.body.tmbServer;
    var objetivo = req.body.objetivoServer;
    var temp_obj = req.body.obj_tempServer;
    var fkUsuario = req.body.idServer;

    if (forca == undefined) {
        res.status(400).send("Sua força está undefined!");
    } else if (resistencia == undefined) {
        res.status(400).send("Sua resistência está indefinida!");
    }else if (velocidade == undefined){
        res.status(400).send("velocidade está undefined")
    } else if (recuperacao == undefined) {
        res.status(400).send("velocidade está undefined") 
    } else if (lesao == undefined) {
        res.status(400).send("velocidade está undefined")
    } else if (saudeMental == undefined) {
        res.status(400).send("velocidade está undefined")
    } else if (fadiga == undefined) {
        res.status(400).send("velocidade está undefined")
    } else if (tmb == undefined) {
        res.status(400).send("velocidade está undefined")
    } else if (objetivo == undefined) {
        res.status(400).send("velocidade está undefined")
    } else if (temp_obj == undefined) {
        res.status(400).send("velocidade está undefined")
    } else {
        console.log(req.body)

        questModel.adicionarQuest(forca, resistencia, velocidade, recuperacao, lesao, saudeMental, fadiga, tmb, objetivo, temp_obj, fkUsuario)
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

}

module.exports = {
    enviar
}