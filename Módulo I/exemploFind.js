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
function comprar(marca, arrayObjetos) {
    const comprarCarro = arrayObjetos.find(
        function (nome) {
            return nome.marca == marca
        }
    )
    console.log(comprarCarro);
}
comprar('Fiat', concessionaria)


