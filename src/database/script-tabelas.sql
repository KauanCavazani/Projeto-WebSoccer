
/* para workbench - local - desenvolvimento */
CREATE DATABASE websoccer;

USE websoccer;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	pontuacao INT,
	qtdAcertos INT,
	qtdErros INT
);

-- CREATE TABLE pontuacao (
-- 	idPnts INT PRIMARY KEY AUTO_INCREMENT,
-- 	pontuacao INT,
-- 	qtdAcertos INT,
-- 	qtdErros INT,
-- 	fkIdUsuario INT,
-- 	FOREIGN KEY(fkIdUsuario) REFERENCES usuario(id)
-- )
