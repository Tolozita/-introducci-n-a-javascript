function calcularEdad(nacimiento, actual) {
    let fechaNacimiento = new Date(nacimiento);
    let fechaActual = new Date(actual);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mesActual = fechaActual.getMonth();
    let mesNacimiento = fechaNacimiento.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return edad;
}

let fechaNacimiento = prompt("Por favor, ingresa tu fecha de nacimiento (YYYY-MM-DD):");
let fechaActual = prompt("Por favor, ingresa la fecha actual (YYYY-MM-DD):");
let edadUsuario = calcularEdad(fechaNacimiento, fechaActual);
alert("Tu edad es: " + edadUsuario + " años.");