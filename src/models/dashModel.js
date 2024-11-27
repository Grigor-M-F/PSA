var database = require("../database/config");

function trazer_dados(id_usuario) {
  console.log("to na model")
  var instrucaoSql = `
    SELECT 
	  forca AS Forca,
    resistencia AS resistencia,
    velocidade AS Velocidade,
    recuperacao AS recuperacao,
    lesao AS lesao,
    saudeMental AS saude,
    fadiga AS Fadiga
    FROM quest
    JOIN cadastro ON fkUsuario = ${id_usuario};`;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function trazer_dados2() {
  console.log("to na model")
  var instrucaoSql = `SELECT 
	c.nome AS nome,
    q.tmb AS tmb
	FROM quest AS q
    JOIN cadastro AS c ON fkUsuario = idUser;`;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function dados_kpi1(id_usuario) {
  console.log("to dentro do model");
  var instrucaoSql = `SELECT 
	TRUNCATE(tmb, 4) AS tmb
    FROM quest
    JOIN cadastro ON fkUsuario = idUser
    WHERE idUser = ${id_usuario};`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}


function dados_kpi2(id_usuario) {
  console.log("to dentro do model");
  var instrucaoSql = `SELECT DATEDIFF(DATE_ADD(chegada, INTERVAL temp_obj DAY), CURRENT_DATE) AS dias
  FROM quest
  JOIN cadastro AS c ON fkUsuario = idUser
  WHERE c.idUser = ${id_usuario};`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}


function dados_kpi3(id_usuario) {
  console.log("to dentro do model");
  var instrucaoSql = `SELECT 
	objetivo AS Meta
    FROM quest
    JOIN cadastro AS c ON fkUsuario = idUser
    WHERE c.idUser = ${id_usuario};`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}

function dados_kpi4() {
  console.log("to no model")
  var instrucaoSql = `SELECT 
  TRUNCATE(AVG(tmb), 2) AS media
  from quest;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  trazer_dados,
  trazer_dados2,
  dados_kpi1,
  dados_kpi2,
  dados_kpi3,
  dados_kpi4
}
