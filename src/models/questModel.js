var database = require("../database/config");

function adicionarQuest(forca, resistencia, velocidade, recuperacao, lesao, saudeMental, fadiga, tmb, objetivo, temp_obj, fkUsuario) {
  var instrucaoSql = `INSERT INTO quest (forca, resistencia, velocidade, recuperacao, lesao, saudeMental, fadiga, tmb, objetivo, temp_obj,fkUsuario) VALUES ('${forca}', ${resistencia}, ${velocidade}, ${recuperacao}, ${lesao}, ${saudeMental}, ${fadiga}, ${tmb}, ${objetivo}, ${temp_obj}, ${fkUsuario})`;

  console.log("executando o insert sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    adicionarQuest
  }