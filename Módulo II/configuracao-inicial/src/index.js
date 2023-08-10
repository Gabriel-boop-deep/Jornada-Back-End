const express = require("express");

const app = express();

const { filtrarAluno, filtrarNomeAluno } = require("./controladores/filtrarAluno")


app.get("/alunos", filtrarNomeAluno);

app.get("/alunos/:id", filtrarAluno);

app.get("/", (req, res) => {
    res.send("Estou ok, e servindo ao vivo, tamu junto pessoal...");
}
)

app.listen(8000,
    console.log("Servidor funcionando...")
);