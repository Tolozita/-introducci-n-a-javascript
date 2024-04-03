function contarPalabras(texto) {
    let palabras = texto.split(" ");
    return palabras.length;
}

let textoUsuario = prompt("Por favor, ingresa un texto para contar sus palabras:");
let cantidadPalabras = contarPalabras(textoUsuario);
alert("El número de palabras en el texto es: " + cantidadPalabras);