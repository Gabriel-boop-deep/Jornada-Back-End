//Criando o objeto que irá conter dados dois pais

const meusPais = {
    mae: 'Eudemeire',
    pai: 'Hildebrando'
};

//Definindp um objeto
const pessoa = {
    nome: 'Gabriel',
    sobreNome: 'Nunes',
    pais: meusPais
};
// Com esse codigo se faz a desestruturacao em js
const { nome, sobreNome, pais } = pessoa;

console.log(pais);


console.log(pessoa.pais['mae'])

for (let itens of pessoa.pais) {
    console.log(itens)
}