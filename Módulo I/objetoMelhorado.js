//Nesse momento, será introduzido o conceito de objeto no Js

//Um objeto pode ser um dicionario

let dict = {
    nome: 'Carlos',
    apelidos: ['Carlinhos', 'Lunático'],
    temCNH: 'CNH',
    altura: 1.87
};

for (let i in dict) {
    console.log(`${i}: ${dict[i]}`)
}

