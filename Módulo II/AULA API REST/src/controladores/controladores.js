const { instrutores } = require("../bancoDeDados");

const apresentacao = (req, res) => {
    res.send("Testando pagina de apresentacao..")
}


const listarInstrutores = (req, res) => {
    return res.json(instrutores);
}

const filtrarInstrutor = (req, res) => {
    const { id } = req.params
    const resultado = instrutores.filter(
        (indice) => {
            return indice.id === Number(id);
        }
    )
    if (resultado[0]) {
        res.status(200).json(resultado);
    } else {
        res.status(404).json("Instrutor não Encontrado...");
    }
}

const cadastrarInstrutor = (req, res) => {
    console.log(req.body)

}

module.exports = {
    listarInstrutores, apresentacao, filtrarInstrutor, cadastrarInstrutor
}