function contarVocalesConsonantes(frase) {
    let vocales = 0;
    let consonantes = 0;
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i].toLowerCase();
        if (/[aeiouáéíóú]/.test(caracter)) {
            vocales++;
        } else if (/[bcdfghjklmnñpqrstvwxyz]/.test(caracter)) {
            consonantes++;
        }
    }
    return { vocales, consonantes };
}

let fraseUsuario = prompt("Por favor, ingresa una frase:");
let resultadosConteo = contarVocalesConsonantes(fraseUsuario);
alert("Número de vocales: " + resultadosConteo.vocales + "\nNúmero de consonantes: " + resultadosConteo.consonantes);
