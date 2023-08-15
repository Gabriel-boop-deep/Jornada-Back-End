

const express = require("express");


const rotas = express();

const instrutores = require("./controladores/controladores");



rotas.get("/", instrutores.apresentacao);

rotas.get("/instrutores", instrutores.listarInstrutores);

rotas.post("/instrutores", instrutores.cadastrarInstrutor);

rotas.get("/instrutores/:id", instrutores.filtrarInstrutor);



module.exports = rotas;