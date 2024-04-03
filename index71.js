function esNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número para verificar si es primo:"));
let mensaje = esNumeroPrimo(numeroUsuario) ? "El número es primo." : "El número no es primo.";
alert(mensaje);