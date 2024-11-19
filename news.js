const express = require('express');
const app = express();
const port = 3000;

let googleNewsApi = require("google-news-json");


app.listen(port, () => {
    console.log("Funcionou, está rodando na porta: " + port);
})

app.get('/', async (req, res) => {
        var pesquisa = req.body.pesquisa;
        const news = await googleNewsApi.getNews(googleNewsApi.SEARCH, `${pesquisa}`, "pt-GB", () => {})
        treat_data(news)
        res.send(news);
})

function treat_data(news) {
    const data_frame = news;
    var titulo, descr, url;

    for(var i=0; i<data_frame.items.length; i++){
        titulo = data_frame.items[i].title;
        descr = data_frame.items[i].description;
        url = data_frame.items[i].url;
    }

    console.log(title, descr, url)

}

console.log(treat_data());

// usar o fetch para acessar o que o usuário digitou.

// fetch ('http://localhost:3000/')
// .then((response) => response.json())
// .then((response) => {
//     console.log('resposta: ', response);
// })
// .catch((error) => {console.log(error)})


// function treat_data () {
//     var data_frame = df;
//     var title;
//     var desc;
//     var url;
    

//     for(var i=0; i<data_frame.length; i++){
//         title = data_frame.items[i].title;
//         desc = data_frame.items[i].description;
//         url = data_frame.items[i].url;
//     }


// }

// console.log(treat_data())

// function search() {
//     treat_data()

//    var searchUser = iptSearch.value;

//    for(var i=0; i<df.length; i++){

//    }
// }
