function calcularSueldoEmpleado(nombre, horasTrabajo, pagoHora) {
    let sueldo = horasTrabajo * pagoHora;
    return { nombre, sueldo };
}

let nombreEmpleado = prompt("Por favor, ingresa el nombre del empleado:");
let horasTrabajo = parseFloat(prompt("Por favor, ingresa las horas de trabajo del empleado:"));
let pagoHora = parseFloat(prompt("Por favor, ingresa el pago por hora del empleado:"));
let sueldoEmpleado = calcularSueldoEmpleado(nombreEmpleado, horasTrabajo, pagoHora);
alert("El sueldo de " + sueldoEmpleado.nombre + " es: " + sueldoEmpleado.sueldo);