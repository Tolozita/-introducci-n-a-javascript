function calcularPromedioFinal(parciales, examenFinal, trabajoFinal) {
    let promedioParciales = (parciales[0] + parciales[1] + parciales[2]) / 3;
    let promedioFinal = promedioParciales * 0.55 + examenFinal * 0.3 + trabajoFinal * 0.15;
    return promedioFinal;
}

let parciales = [];
for (let i = 1; i <= 3; i++) {
    let calificacion = parseFloat(prompt("Por favor, ingresa la calificación del parcial " + i + ":"));
    parciales.push(calificacion);
}
let examenFinal = parseFloat(prompt("Por favor, ingresa la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Por favor, ingresa la calificación del trabajo final:"));
let promedioFinal = calcularPromedioFinal(parciales, examenFinal, trabajoFinal);
alert("El promedio final de la materia es: " + promedioFinal);