const express = require('express');
const app = express();
const port = 3000;

let googleNewsApi = require("google-news-json");


app.listen(port, () => {
    console.log("Funcionou, está rodando na porta: " + port);
})

app.get('/', async (req, res) => {
        var pesquisa = req.params.pesquisa;
        const news = await googleNewsApi.getNews(googleNewsApi.SEARCH, `${pesquisa}`, "pt-GB", () => {})
        const processar_dados = treat_data(news);
        res.json(processar_dados);
})

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

fetch('http://localhost:3000/soccer')  // Substitua "soccer" pela pesquisa que você deseja
    .then(response => response.json())  // Convertendo a resposta para JSON
    .then(data => {
        console.log(data);  // Exibe as notícias processadas no console
        // Aqui você pode usar os dados para exibir as notícias na página, por exemplo
    })
    .catch(error => {
        console.error('Erro ao buscar notícias:', error);
    });
