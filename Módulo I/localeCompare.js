// const listaNomes = ['Ana', 'Carlos', 'bea', 'Rick'];

// const ordenador = listaNomes.sort(
//     (a, b) => {
//         return a.localeCompare(b);
//     }
// )
// console.log(ordenador)



const pessoas = [
    {
        nome: "Car",
        idade: 22
    },
    {
        nome: "Bet",
        idade: 19
    },
    {
        nome: "Nio",
        idade: 43
    }
]

const ordemIdade = pessoas.sort(
    function (a, b) {
        return a.idade - b.idade
    }
)

console.log(ordemIdade)
