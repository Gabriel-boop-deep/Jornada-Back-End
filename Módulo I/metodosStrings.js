//Usando o método indexOf


let numeros = [5, 4, 3, 2, 1];

const posicao = numeros.indexOf(3);

console.log(posicao);


//Usando o método Join

console.log(numeros.join());
console.log(numeros.join("-"));
console.log(numeros.join("..."));


//Usando o método slice

// console.log(numeros.slice(0, 3));


//Usando o método splice

numeros = [5, 4, 3, 21, 1]
numeros.splice(numeros.length, 0, 3)
numeros.splice(numeros.indexOf(3), 1)
console.log(numeros)