const express = require("express");

const rotas = express();

const aluno = require("./controladores/filtrarAluno")

rotas.get("/", (req, res) => {
    res.send("Olá seja bem-vindo")
});

rotas.get("/alunos", aluno.listarAlunos);

rotas.get("/alunos/:id", aluno.filtrarIdAlunos);

rotas.post("/alunos", aluno.cadastrarAluno);

rotas.put("/alunos/:id/atualizar", aluno.atualizarAluno);

rotas.patch("/alunos/:id/atualizar-status", aluno.atualizarStatus);

rotas.delete("/alunos/:id/deletar-aluno", aluno.apagarAluno);
module.exports = rotas;
