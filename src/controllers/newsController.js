var newsModel = require("../models/newsModel");


function search(req, res) {
    var pesquisa = req.body.searchServer;
    console.log(pesquisa)
    // if (pesquisa == undefined) {
    //     res.status(400).send("Sua pesquisa está indefinida!");
    // } 
   
        newsModel.search(pesquisa).then((resultado) => {
            console.log(resultado, "aqui ")
            
            if (resultado && resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.json({message: "Nenhum resultado encontrado na pesquisa!"});
            }
        })

        
    }
  
       


module.exports = {
    search
}