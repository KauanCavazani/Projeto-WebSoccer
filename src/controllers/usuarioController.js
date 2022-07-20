var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var pontuacao = req.body.pontuacaoServer;
    var qtdAcertos = req.body.qtdAcertosServer;
    var qtdErros = req.body.qtdErrosServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrar(nome, email, senha, pontuacao, qtdAcertos, qtdErros)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function savePontos(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var qtdAcertos = req.body.qtdAcertosServer;
    var qtdErros = req.body.qtdErrosServer;
    var idUsuario = req.body.idUsuarioServer;

    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else if (qtdAcertos == undefined) {
        res.status(400).send("Sua quantidade de acertos está undefined!");
    } else if (qtdErros == undefined) {
        res.status(400).send("Sua quantidade de erros está undefined!");
    } else {
        
        usuarioModel.savePontos(pontuacao, qtdAcertos, qtdErros, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
    }
}

module.exports = {
    entrar,
    cadastrar,
    savePontos,
    testar
}