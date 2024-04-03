function contarLetrasVocalesConsonantes(frase) {
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

let fraseUsuario = prompt("Por favor, ingresa una frase para contar sus letras, vocales y consonantes:");
let resultadosConteo = contarLetrasVocalesConsonantes(fraseUsuario);
alert("Número de letras: " + (resultadosConteo.vocales + resultadosConteo.consonantes) +
    "\nNúmero de vocales: " + resultadosConteo.vocales +
    "\nNúmero de consonantes: " + resultadosConteo.consonantes);