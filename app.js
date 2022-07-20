process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var dotenv = require("dotenv")
var PORTA = 3333;

dotenv.config();

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);

app.listen(PORTA, function () {
    console.log(`Servidor da WebSoccer está rodando!\n 
    Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    Caminho: http://localhost:${PORTA}`);
});
