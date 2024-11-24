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

CREATE TABLE if not exists quest (
	idQuest int primary key auto_increment,
	forca INT,
	resistencia INT,
    velocidade INT,
    recuperacao INT,
    lesao INT,
    saudeMental INT,
    fadiga INT,
    tmb int,
    objetivo varchar(30),
    temp_obj int,
	fkUsuario int,
	CONSTRAINT fkUserQuest FOREIGN KEY (fkUsuario) REFERENCES cadastro (idUser)
);