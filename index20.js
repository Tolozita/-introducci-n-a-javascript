
function calcularRaicesEcuacionSegundoGrado(a, b, c) {
    let discriminante = b * b - 4 * a * c;
    let raizDiscriminante = Math.sqrt(Math.abs(discriminante));
    let raiz1 = (-b + raizDiscriminante) / (2 * a);
    let raiz2 = (-b - raizDiscriminante) / (2 * a);
    return { raiz1, raiz2 };
}

let valorA = parseFloat(prompt("Por favor, ingresa el valor de 'a' en la ecuación de segundo grado:"));
let valorB = parseFloat(prompt("Por favor, ingresa el valor de 'b' en la ecuación de segundo grado:"));
let valorC = parseFloat(prompt("Por favor, ingresa el valor de 'c' en la ecuación de segundo grado:"));
let resultadosEcuacionSegundoGrado = calcularRaicesEcuacionSegundoGrado(valorA, valorB, valorC);
alert("Las raíces de la ecuación son: " + resultadosEcuacionSegundoGrado.raiz1 + " y " + resultadosEcuacionSegundoGrado.raiz2);
