const ingresso = false;
const censura = 16;
const idade = 15;

if (ingresso) {
    if (idade >= censura) {
        console.log("Tá liberado!");
    } else {
        console.log("Não pode entrar!");
    }
} else {
    console.log("Não pode entrar!");
}