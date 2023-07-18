//Criar uma função que retorne um valor e esse valor possa ser usado em outra função

function idades(idade) {
    return idade;
}

let idade = idades(24);

function idadePessoa(idade) {
    if (idade <= 21) {
        return 'jovem'
    } else if (idade >= 22 && idade <= 65) {
        return 'Adulto'
    } else {
        return 'Idoso'
    }
}

console.log(idadePessoa(idade));