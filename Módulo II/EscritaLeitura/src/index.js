const express = require("express");
const fsPromisse = require("fs/promises");
const { parse } = require("path");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const aluno = await fsPromisse.readFile("aluno.json");
    const alunoParse = JSON.parse(aluno);
    const alunoString = JSON.stringify(alunoParse);
    await fsPromisse.writeFile("./src/arquivoBb.txt", alunoString);
    res.status(200).json({ mensagem: "Tudo funcionando corretamente..." });
})

app.listen(
    3000,
    console.log("Servidor funcionando...")
)