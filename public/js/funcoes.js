// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var pontuacao = sessionStorage.PONTUACAO_USUARIO;

    var nomeUsuario = document.getElementById("b_usuario");
    var pontosQuiz = document.getElementById("b_pontuacao");

    if (email != null && nome != null && pontosQuiz != null) {
        if (nomeUsuario != undefined) {
            b_usuario.innerHTML = nome;
        }
        if (pontosQuiz != undefined) {
            b_pontuacao.innerHTML = pontuacao;
        }

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("div_campos");
    divCampos.style.display = "none";
    divAguardar.style.display = "block";
    divAguardar.style.display = "flex";
}



function finalizarAguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("div_campos");
    divAguardar.style.display = "none";
    divCampos.style.display = "block";
}