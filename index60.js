function verificarFechaValida(fecha) {
    return !isNaN(new Date(fecha));
}

let fechaIngresada = prompt("Por favor, ingresa una fecha en formato YYYY-MM-DD:");
if (verificarFechaValida(fechaIngresada)) {
    alert("La fecha ingresada es válida.");
} else {
    alert("La fecha ingresada no es válida.");
}