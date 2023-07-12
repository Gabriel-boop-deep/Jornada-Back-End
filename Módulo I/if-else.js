const idade = 60;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18) {
    if (idade <= 45) {
        console.log("Jovem");
    }
    if (idade > 45) {
        if (idade <= 60) {
            console.log("Meia-idade");
        }
        if (idade > 60) {
            console.log("Idoso");
        }
    }
}

