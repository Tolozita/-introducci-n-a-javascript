function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let numeroFactorial = parseInt(prompt("Por favor, ingresa un número para calcular su factorial:"));
let factorial = calcularFactorial(numeroFactorial);
alert("El factorial de " + numeroFactorial + " es: " + factorial);