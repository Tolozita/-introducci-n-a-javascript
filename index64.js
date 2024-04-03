function eliminarCaracteresRepetidos(frase) {
    let caracteres = "";
    for (let i = 0; i < frase.length; i++) {
        if (frase.indexOf(frase[i]) === frase.lastIndexOf(frase[i])) {
            caracteres += frase[i];
        }
    }
    return caracteres;
}

let fraseUsuario = prompt("Por favor, ingresa una frase para eliminar caracteres repetidos:");
let fraseSinRepetidos = eliminarCaracteresRepetidos(fraseUsuario);
alert("La frase sin caracteres repetidos es: " + fraseSinRepetidos);