
function contarDigitos(numero) {
    return numero.toString().length;
}

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número para contar sus dígitos:"));
let cantidadDigitos = contarDigitos(numeroUsuario);
alert("El número de dígitos en el número es: " + cantidadDigitos);