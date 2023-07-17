//Nesse código, o objetivo é ordenar o maior e o menor número usando laço while

//inicializando uma lista de numeros

let numeros = [5,4,3,7,1,9,11,15,0];

//Pegar o maior numero
// Meu raciocionio

// 5[0] > 4 [1] ? True
// 5[0] > 3 [2] ? True
// 5[0] > 7 [3] ? False
// 4[1] > 3 [2] ? True
// 4[1] > 7 [3] ? False
// 3[2] > 7 [3] ? False

let j = 0,i = 0,cont_true = 0,cont_false = 0,parametro = numeros.length-1,maior,menor;

while (i<parametro){
    //console.log(numeros[j],numeros[i])
    i++;
    if(i>j){
        //console.log(numeros[j],numeros[i],numeros[j]>numeros[i]);
        if(numeros[j]>numeros[i]==false){
            cont_false++;
            maior=numeros[i];
        } else if(numeros[j]>numeros[i]==true){
            cont_true++; 
            menor=numeros[i]           
        }
        if(i==parametro){
            i=0;
            j++;
        }
    }     
}
console.log(maior,menor)