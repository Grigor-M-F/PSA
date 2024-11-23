var database = require("../database/config");

function search() {
    console.log("Certo!");
    var instrucaoSQL= `
    SELECT title AS 'Título',
            descr AS 'Descrição', 
            url AS URL  
            FROM data_frame;
            `;
    return database.executar(instrucaoSQL);
}

function insert(title, descr, url){
    console.log("Certo!");
    var instrucaoSQL = `
    INSERT INTO data_frame (title, descr, url) VALUES ('${title}', '${descr}', '${url}');`;

    return database.executar(instrucaoSQL);
}

module.exports = {
    search,
    insert
};
