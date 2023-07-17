//Nesse momento, será introduzido o conceito de objeto no Js

//Um objeto pode ser um dicionario

let dict = {
    nome: 'Carlos',
    apelidos: ['Carlinhos', 'Lunático'],
    temCNH: 'CNH',
    altura: 1.87
};

console.log(`${dict['nome']},tem ${dict['temCNH']}, tem ${dict['altura']} m de altura e tem os seguintes apelidos: \n${dict['apelidos'][0]}\n${dict['apelidos'][1]}`);