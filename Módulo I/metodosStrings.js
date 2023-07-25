//Usando o método indexOf


const numeros = [5, 4, 3, 2, 1];

const posicao = numeros.indexOf(3);

console.log(posicao);


//Usando o método Join

console.log(numeros.join());
console.log(numeros.join("-"));
console.log(numeros.join("..."));


//Usando o método slice

console.log(numeros.slice(0, 3));


//Usando o método splice

console.log(numeros.splice(0, 1, 5))