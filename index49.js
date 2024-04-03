function calcularPromedioPonderado(notas, creditos) {
    let sumaProductos = 0;
    let sumaCreditos = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaProductos += notas[i] * creditos[i];
        sumaCreditos += creditos[i];
    }
    let promedioPonderado = sumaProductos / sumaCreditos;
    return promedioPonderado;
}

let cantidadCursos = parseInt(prompt("Por favor, ingresa la cantidad de cursos:"));
let notas = [];
let creditos = [];
for (let i = 1; i <= cantidadCursos; i++) {
    let nota = parseFloat(prompt("Por favor, ingresa la nota del curso " + i + ":"));
    let credito = parseInt(prompt("Por favor, ingresa el número de créditos del curso " + i + ":"));
    notas.push(nota);
    creditos.push(credito);
}
let promedioFinal = calcularPromedioPonderado(notas, creditos);
alert("El promedio ponderado final es: " + promedioFinal);