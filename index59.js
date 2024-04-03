function calcularNumeroDeDias(mes, anio) {
    return new Date(anio, mes, 0).getDate();
}

let mesSeleccionado = parseInt(prompt("Por favor, ingresa el número del mes (1-12):"));
let anioSeleccionado = parseInt(prompt("Por favor, ingresa el año:"));
let numeroDias = calcularNumeroDeDias(mesSeleccionado, anioSeleccionado);
alert("El número de días en el mes seleccionado es: " + numeroDias);