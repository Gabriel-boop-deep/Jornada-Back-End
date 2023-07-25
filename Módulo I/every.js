const lista = [];
let numero = 0;
const addNumero = setInterval(
    function () {
        lista.push(numero);
        numero++;
        if (numero == 7) {
            clearInterval(addNumero);
        }
    }
)

const resultado = lista.every(function (number) {
    return number < 8;
})

console.log(resultado)