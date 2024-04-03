
function operacionesBasicas(numero1, numero2) {
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    return { suma, resta, multiplicacion, division };
}

let numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
let resultadoOperaciones = operacionesBasicas(numero1, numero2);
alert("Suma: " + resultadoOperaciones.suma + "\nResta: " + resultadoOperaciones.resta +
    "\nMultiplicación: " + resultadoOperaciones.multiplicacion + "\nDivisión: " + resultadoOperaciones.division);