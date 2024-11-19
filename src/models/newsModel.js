var database = require("../database/configNews");

function search(title, descr, url) {
    console.log("Certo!");
    var instrucaoSQL= `
    INSERT INTO data_frame (title, desc, url) VALUES ('${title}', '${descr}', '${url}')`;
    
    return database.executar(instrucaoSQL);

}

module.exports = {
    search
};
