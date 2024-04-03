function convertirMayusculasMinusculas(texto) {
    let textoConvertido = "";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter === caracter.toUpperCase()) {
            textoConvertido += caracter.toLowerCase();
        } else {
            textoConvertido += caracter.toUpperCase();
        }
    }
    return textoConvertido;
}

let textoUsuario = prompt("Por favor, ingresa un texto para convertir mayúsculas en minúsculas y viceversa:");
let textoConvertido = convertirMayusculasMinusculas(textoUsuario);
alert("El texto convertido es: " + textoConvertido);