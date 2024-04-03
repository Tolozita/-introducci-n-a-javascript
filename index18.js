
function evaluarExpresion(a, b, c) {
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    return resultado;
}

let valorA = parseFloat(prompt("Por favor, ingresa el valor de 'a':"));
let valorB = parseFloat(prompt("Por favor, ingresa el valor de 'b':"));
let valorC = parseFloat(prompt("Por favor, ingresa el valor de 'c':"));
let resultadoExpresion = evaluarExpresion(valorA, valorB, valorC);
alert("El resultado de la expresión es: " + resultadoExpresion);