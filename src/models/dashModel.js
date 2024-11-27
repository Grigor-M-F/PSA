var database = require("../database/config");

function trazer_dados() {
    console.log("to na model")
  var instrucaoSql = `
    SELECT 
	forca AS 'Força',
    resistencia AS 'Rsistência',
    velocidade AS Velocidade,
    recuperacao AS 'Recuperação',
    lesao AS 'Lesão',
    saudeMental AS 'Saúde Mental',
    fadiga AS Fadiga
    FROM quest
    JOIN cadastro ON fkUsuario = idUser;`;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function trazer_dados2() {
    console.log("to na model")
  var instrucaoSql = ``;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function dados_kpi1(){
  console.log("to dentro do model");
  var instrucaoSql = `SELECT 
	TRUNCATE(tmb, 4) AS 'Taxa Metabólica Basal'
    FROM quest
    JOIN cadastro ON fkUsuario = idUser;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}


function dados_kpi2(){
  console.log("to dentro do model");
  var instrucaoSql = `SELECT DATE_ADD(chegada, INTERVAL temp_obj DAY) FROM quest;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}


function dados_kpi3(){
  console.log("to dentro do model");
  var instrucaoSql = `SELECT 
	objetivo AS Meta
    FROM quest
    JOIN cadastro ON fkUsuario = idUser;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}



module.exports = {
    trazer_dados,   
    trazer_dados2,
    dados_kpi1,
    dados_kpi2,
    dados_kpi3
  }
  