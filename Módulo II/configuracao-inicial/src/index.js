const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const rotas = require("./rotas");
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     console.log("Indo atrás do pessoal do g sep i");
//     next();
// })

app.use(rotas);


app.listen(8000,
    console.log("Servidor funcionando...")
);