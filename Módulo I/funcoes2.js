//Criando uma função que recebe como parametro a idade e devolve a faixa etaria da pessoa

function idadePessoa(idade) {
    if (idade <= 21) {
        return 'jovem'
    } else if (idade >= 22 && idade <= 65) {
        return 'Adulto'
    } else {
        return 'Idoso'
    }
}

console.log(idadePessoa(20));