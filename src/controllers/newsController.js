let googleNewsApi = require("google-news-json");

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

   async function newsApi(pesquisa) {
            console.log("buceta")
            const news = await googleNewsApi.getNews(googleNewsApi.SEARCH, `${pesquisa}`, "pt-GB", () => {})
            const processar_dados = treat_data(news);
            return processar_dados;
    }
    
    function treat_data(news) {
        var data_frame = [];
        var title, descr, url;
    
        for(var i=0; i<data_frame.length;i++){
            title = news.items[i].title;
            descr = news.items[i].description;
            url = news.items[i].url;
        }
    
        data_frame.push({
            title: title,
            description: descr,
            url: url
        })
    
        return data_frame
    }



  
   async function insert(req, res) {
        var pesquisa = req.body.searchServer;
        console.log(await newsApi(pesquisa));
        res.status(200).send();
    }


module.exports = {
    search,
    insert,
}