let lista = [4, 3, 5, 8];

const ordem = lista.sort(
    function (numa, numb) {
        if (numa > numb) {
            return 1
        }
        if (numb > numa) {
            return -1
        }
        return 0;
    }
)
console.log(ordem)