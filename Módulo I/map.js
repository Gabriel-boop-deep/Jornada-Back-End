const nomeCompleto = [
    {
        nome: 'Gab',
        sobrenome: 'Nunes'
    },
    {
        nome: 'Jaques',
        sobrenome: 'Lopes'
    }
];

const mapeadorNome = nomeCompleto.map(
    function (merge) {
        return {
            nomecompleto: `${merge.nome} ${merge.sobrenome}`
        }
    }
)
console.log(mapeadorNome)