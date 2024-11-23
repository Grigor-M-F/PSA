CREATE DATABASE psa;

USE psa;

CREATE TABLE if not exists cadastro(
idUser int primary key auto_increment,
nome varchar(45) not null,
email varchar(60) not null,
cpf char(11) not null,
dtNasc date not null,
telefone char(11) not null,
senha varchar(20)
);


SELECT idUser, nome, email FROM cadastro WHERE email = 'test@hotmail.com' AND senha = 'Git012@#$';

SELECT * FROM cadastro;

DELETE FROM cadastro WHERE idUser = 2;
UPDATE cadastro SET senha = 'Git012@#$' WHERE idUser = 3;

CREATE TABLE if not exists data_frame (
idData_frame int primary key auto_increment,
title varchar(100),
descr text,
url varchar(200));

CREATE TABLE if not exists fale_conosco (
idFale_conosco int primary key auto_increment,
nome varchar(45),
email varchar(60),
descricao text,
data_fale date,
fkUser int,
constraint fkUserFale foreign key (fkUser)
references cadastro (idUser)
);

CREATE TABLE if not exists questionario (
	idQuest int primary key auto_increment,
	lesao TINYINT,
	qtd_Lesoe INT,
	uf CHAR(2),
	cidade VARCHAR(100),
	fkUsuario int,
	CONSTRAINT fkUserQuest FOREIGN KEY (fkUsuario) REFERENCES cadastro (idUser)
);


CREATE TABLE if not exists mensagem (
	fkUser int,
	fkMedico int,
	PRIMARY KEY(fkUser, fkMedico),
	dtEnvio TIMESTAMP,
	dtRecebimento TIMESTAMP,
	mensagem TEXT
);
