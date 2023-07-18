//Criando o objeto que irá conter dados dois pais

const meusPais = {
    mãe: 'Eudemeire',
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

console.log(nome, sobreNome, pais);


