function eliminarEspacios(texto) {
    let textoSinEspacios = texto.replace(/\s/g, "");
    return textoSinEspacios;
}

let textoUsuario = prompt("Por favor, ingresa un texto para eliminar los espacios:");
let textoSinEspacios = eliminarEspacios(textoUsuario);
alert("El texto sin espacios es: " + textoSinEspacios);