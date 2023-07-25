
// for (let i = 0; i < 5; i++) {
//     function contador(i) {
//         console.log(i)
//     }
// }
// clearInterval(interval)

// imprimir()
let numeros = 0, lista = [], merge = '';
const interval = setInterval(
    function () {
        console.log(numeros)
        numeros++;
        if (numeros == 10) {
            clearInterval(interval)
        }
    },
    500
)
