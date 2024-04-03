function calcularPromedioCalificaciones(calificaciones) {
    let sumaCalificaciones = 0;
    let maximaCalificacion = 0;
    let minimaCalificacion = 5;
    let cantidadMaximasCalificaciones = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        sumaCalificaciones += calificaciones[i];
        if (calificaciones[i] > maximaCalificacion) {
            maximaCalificacion = calificaciones[i];
        }
        if (calificaciones[i] < minimaCalificacion) {
            minimaCalificacion = calificaciones[i];
        }
    }

    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] === maximaCalificacion) {
            cantidadMaximasCalificaciones++;
        }
    }

    let promedio = sumaCalificaciones / calificaciones.length;
    return { promedio, maximaCalificacion, minimaCalificacion, cantidadMaximasCalificaciones };
}

let calificacionesAlumnos = [];
for (let i = 1; i <= 4; i++) {
    let calificacion = parseFloat(prompt("Por favor, ingresa la calificación del alumno " + i + ":"));
    calificacionesAlumnos.push(calificacion);
}
let resultadosCalificaciones = calcularPromedioCalificaciones(calificacionesAlumnos);
alert("Promedio de calificaciones: " + resultadosCalificaciones.promedio +
    "\nCalificación más alta: " + resultadosCalificaciones.maximaCalificacion +
    "\nCalificación más baja: " + resultadosCalificaciones.minimaCalificacion +
    "\nCantidad de alumnos con calificación máxima: " + resultadosCalificaciones.cantidadMaximasCalificaciones);