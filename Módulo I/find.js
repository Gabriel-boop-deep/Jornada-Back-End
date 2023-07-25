const usuario = [
    {
        nome: 'Gab'
    },
    {
        nome: 'Beto'
    },
    {
        nome: 'Binho'
    }
]

const verifadorNome = usuario.find(
    function (name) {
        return name.nome === 'Bet';
    }
)
console.log(verifadorNome);