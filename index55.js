function verificarCapicua(numero) {
    let numeroInvertido = parseInt(numero.toString().split("").reverse().join(""));
    return numero === numeroInvertido;
}

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número para verificar si es capicúa:"));
if (verificarCapicua(numeroUsuario)) {
    alert("El número es capicúa.");
} else {
    alert("El número no es capicúa.");
}