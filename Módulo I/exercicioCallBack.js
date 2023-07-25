const cinema = [
    {
        nome: "Gab",
        idade: 18
    },
    {
        nome: "Bia",
        idade: 19
    },
    {
        nome: "Tay",
        idade: 19
    }
]
const validador = cinema.every(
    function (idad) {
        return idad.idade >= 18;
    }
)
console.log(validador == true ? 'obaaa' : 'poxa tio')