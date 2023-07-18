const pessoa = {
    nome: 'Gabriel',
    idade: 24,
    apresentar: function () {
        if (this.idade <= 21) {
            return 'jovem'
        } else if (this.idade >= 22 && this.idade <= 65) {
            return 'Adulto'
        } else {
            return 'Idoso'
        }
    }
};

console.log(pessoa.apresentar());