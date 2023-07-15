//definindo um array de tipo lista

let nomes = ['Chico', 'Maria', 'Rogrigo', "Gabriel"];

//imprimindo a lista na tela

console.log(nomes);

//Podemos percorrer essa lista de nomes

for (let nome of nomes){
    console.log(nome);
}

//Posso verificar as iniciais de cada nome e finais de cada nome e retornar a quanridade 
//de um caracteres que cada palavra dentro dessa lista tem

for (let nome of nomes){
    console.log(`letra inicial ${nome[0]},letra final: ${nome[nome.length-1]}, e o tamanho ${nome.length}`);
}