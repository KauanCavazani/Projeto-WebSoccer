// sessao
function iniciarSessao() {
    var spanPontuacao = document.getElementById("b_pontuacao");
    var pontuacao = sessionStorage.PONTUACAO_USUARIO;

    spanPontuacao.innerHTML = pontuacao;
}

// quiz

var apito = new Audio("../css/audio/apitodefutebol.mp3");
var torcida = new Audio("../css/audio/torcida_efeito_sonoro_toquesengracadosmp3.com.mp3");

var pontos = Number(sessionStorage.PONTUACAO_USUARIO);
var qtdAcertos = 0;
var qtdErros = 0;

function start() {
    var botao = document.getElementById("btn");
    var divPerguntas = document.getElementById("divPerguntas");

    botao.style.display = "none";
    divPerguntas.style.display = "block";

    exibirQuestionario(0);
}

function exibirQuestionario(id) {
    var questao = document.getElementById('questao');
    questao.innerText = questoes[id].pergunta;

    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');
    var op4 = document.getElementById('op4');

    op1.innerText = questoes[id].alternativas[0].opt;
    op2.innerText = questoes[id].alternativas[1].opt;
    op3.innerText = questoes[id].alternativas[2].opt;
    op4.innerText = questoes[id].alternativas[3].opt;

    var selecionado = "";

    op1.addEventListener("click", () => {
        selecionado = "";
        op1.style.backgroundColor = "rgba(14, 54, 0, 1)";
        op2.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op3.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op4.style.backgroundColor = "rgba(60, 187, 0, 1)";
        selecionado = op1.value;
    })

    op2.addEventListener("click", () => {
        selecionado = "";
        op1.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op2.style.backgroundColor = "rgba(14, 54, 0, 1)";
        op3.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op4.style.backgroundColor = "rgba(60, 187, 0, 1)";
        selecionado = op2.value;
    })

    op3.addEventListener("click", () => {
        selecionado = "";
        op1.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op2.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op3.style.backgroundColor = "rgba(14, 54, 0, 1)";
        op4.style.backgroundColor = "rgba(60, 187, 0, 1)";
        selecionado = op3.value;
    })

    op4.addEventListener("click", () => {
        selecionado = "";
        op1.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op2.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op3.style.backgroundColor = "rgba(60, 187, 0, 1)";
        op4.style.backgroundColor = "rgba(14, 54, 0, 1)";
        selecionado = op4.value;
    })

}


