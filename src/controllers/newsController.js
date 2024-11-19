var newsModel = require("../models/newsModel");


function search(req, res) {
    var pesquisa = req.body.searchServer;

    if (pesquisa == undefined) {
        res.status(400).send("Sua pesquisa está indefinida!");
    } 
    try {
        const resultado = newsModel.search(pesquisa)

        if (resultado && resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).send("Nenhum resultado encontrado na pesquisa!");
        }
    }
    catch(erro){
        console.log(erro);
        res.status(500).send("Houve um erro ao realizar a pesquisa.")

    }
}

module.exports = {
    search
}