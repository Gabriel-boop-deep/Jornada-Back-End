const lista = [5, 4, 3, 2, 1];

const verificador = lista.some(
    function (numero) {
        return numero === 7;
    }
)
console.log(verificador)