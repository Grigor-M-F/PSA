let googleNewsApi = require("google-news-json");

// var newsModel = require("../models/newsModel");


function search(req, res) {
    var pesquisa = req.body.searchServer;
    console.log(pesquisa)

    if (pesquisa == undefined) {
        res.status(400).send("Sua pesquisa está indefinida!")
    } else {
        newsApi(pesquisa).then((resultado) => {
            console.log(resultado, "aqui ")

            if (resultado && resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.json({ message: "Nenhum resultado encontrado na pesquisa!" });
            }
        })



    }




}

async function newsApi(pesquisa) {
    console.log("Estou aqui")
    const news = await googleNewsApi.getNews(googleNewsApi.SEARCH, `${pesquisa}`, "pt-GB", () => { })
    // console.log(news)
    console.log(news.items[0])
    return news.items;
}








//    async function insert(req, res) {
//         var pesquisa = req.body.searchServer;
//         console.log(await newsApi(pesquisa));
//         res.status(200).send();
//     }


module.exports = {
    search,
    newsApi
}