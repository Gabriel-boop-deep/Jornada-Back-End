let alunos = require("../bancoDeDados");

const filtrarAluno = (req, res) => {
    const { id } = req.params;
    const encontrarAluno = alunos.find(
        (aluno) => {
            return aluno.id == id;
        }
    )
    res.send(encontrarAluno);
}


const filtrarNomeAluno = (req, res) => {
    const { nome } = req.query;
    let resultado = [];
    if (nome) {
        resultado = alunos.filter(
            (nom) => {
                return nom.nome == nome
            }
        )
    }

    res.send(resultado);

}


module.exports = { filtrarAluno, filtrarNomeAluno };