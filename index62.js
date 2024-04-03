function contarLetras(frase) {
    let letras = {};
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i].toLowerCase();
        if (/[a-z]/.test(letra)) {
            if (letras.hasOwnProperty(letra)) {
                letras[letra]++;
            } else {
                letras[letra] = 1;
            }
        }
    }
    return letras;
}

let fraseUsuario = prompt("Por favor, ingresa una frase para contar las letras:");
let letrasContadas = contarLetras(fraseUsuario);
alert("Las letras y sus frecuencias son: " + JSON.stringify(letrasContadas));