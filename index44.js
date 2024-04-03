function contarCaracteres(texto) {
    let caracteres = {};
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracteres.hasOwnProperty(caracter)) {
            caracteres[caracter]++;
        } else {
            caracteres[caracter] = 1;
        }
    }
    return caracteres;
}

let textoUsuario = prompt("Por favor, ingresa un texto para contar sus caracteres:");
let caracteresContados = contarCaracteres(textoUsuario);
alert("Los caracteres y sus frecuencias son: " + JSON.stringify(caracteresContados));