function encontrarPalabraMasLarga(frase) {
    let palabras = frase.split(" ");
    let palabraMasLarga = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }
    return palabraMasLarga;
}

let fraseUsuario = prompt("Por favor, ingresa una frase para encontrar la palabra más larga:");
let palabraLarga = encontrarPalabraMasLarga(fraseUsuario);
alert("La palabra más larga en la frase es: " + palabraLarga);