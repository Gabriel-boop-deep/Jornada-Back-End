//Podemos atribui novos valores ao objeto mesmo já previamente declarado

//Exemplo

let pessoa = {
    nome: 'Gabriel',
    sobreNome: 'Nunes',
    pais: 'Hildebrando'
}

//Para isso posso usar ternario

pessoa.pais = (pessoa.pais ? 'Tem pais' : 'pais não foi especificado');

console.log(pessoa);