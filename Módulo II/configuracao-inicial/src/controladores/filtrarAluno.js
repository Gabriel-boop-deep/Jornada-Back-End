let { alunos } = require("../bancoDeDados");
let { identificadorAluno } = require("../bancoDeDados");
let listarAlunos = (req, res) => {
    res.json(alunos);
}


const filtrarIdAlunos = (req, res) => {
    let resultado = [];
    const { id } = req.params;
    resultado = alunos.find((aluno) => {
        return aluno.id = Number(id);
    });
    res.status(200).json(resultado);

}

const cadastrarAluno = (req, res) => {
    const { nome, email, status } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório" });
    }
    if (!email) {
        return res.status(400).json({ mensagem: "O email é obrigatório" });
    }

    const aluno = {
        id: identificadorAluno++,
        nome: nome,
        email: email,
        status: status ?? true
    }

    alunos.push(aluno);

    return res.status(201).json({ mensagem: aluno });
}

const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: "Nome do aluno não foi encontrado" });
    }
    if (!email) {
        return res.status(400).json({ mensagem: "Email do aluno não foi encontrado" });
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id = Number(id);
    });
    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    aluno.nome = nome;
    aluno.email = email;
    aluno.status = status;

    return res.status(203).send();
}

const atualizarStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    console.log(req.body)
    const aluno = alunos.find((aluno) => {
        return aluno.id = Number(id);
    });
    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    aluno.status = status;

    return res.status(204).send();
}

const apagarAluno = (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find(
        (dadosAluno) => {
            return dadosAluno.id === Number(id);
        }
    )
    if (!aluno) {
        return res.status(200).json({ mensagem: "Aluno não foi encontrado" });
    }
    alunos = alunos.filter(
        (dadosAluno) => {
            return dadosAluno.id !== Number(id);
        }
    )
    return res.status(200).json(alunos)
}

module.exports = {
    listarAlunos,
    filtrarIdAlunos,
    cadastrarAluno,
    atualizarAluno,
    atualizarStatus,
    apagarAluno
};