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

// function trazer_dados2() {
//     console.log("to na model")
//   var instrucaoSql = `select count(id) as quantidade,
// 	case 
// 	WHEN numero = 1 THEN 'Pedra Filosofal'
//     WHEN numero = 2 THEN 'Câmara Secreta'
//     WHEN numero = 3 THEN 'Prisioneiro de Azkaban'
//     WHEN numero = 4 THEN 'Cálice de Fogo'
//     WHEN numero = 5 THEN 'Ordem da Fênix'
//     WHEN numero = 6 THEN 'Enigma do Principe'
//     WHEN numero = 7 THEN 'Relíquias da Morte'
//     WHEN numero = 8 THEN 'Criança Amaldiçoada'
//     ELSE ''
//     END AS 'nome'
// 	from interacoes 
//     where numero = 1 or numero = 2 or numero = 3 or numero = 4 or numero = 5 or numero = 6 or numero = 7 or numero = 8 
//     group by numero 
//     order by numero;`;

//   console.log("executando o select sql: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

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
    dados_kpi1,
    dados_kpi2,
    dados_kpi3
  }
  