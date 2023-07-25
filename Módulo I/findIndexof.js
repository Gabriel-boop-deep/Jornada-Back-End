const concessionaria = [
    {
        modelo: "Corolla",
        marca: "Toyota",
        cor: "Prata"
    },
    {
        modelo: "Argo",
        marca: "Fiat",
        cor: "Violeta"
    },
    {
        modelo: "Gt",
        marca: "Ford",
        cor: "Azul"
    }
]

const encontrarIndex = concessionaria.findIndex(
    function (nome) {
        return nome.modelo == 'Argo';
    }
)
console.log(encontrarIndex)