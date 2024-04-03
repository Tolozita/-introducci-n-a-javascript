function calcularMontoPrestamo(cantidadPrestamo, interesAnual, plazoMeses) {
    let interesMensual = (interesAnual / 100) / 12;
    let montoPrestamo = cantidadPrestamo * ((interesMensual * Math.pow(1 + interesMensual, plazoMeses)) / (Math.pow(1 + interesMensual, plazoMeses) - 1));
    return montoPrestamo;
}

let cantidadPrestamo = parseFloat(prompt("Por favor, ingresa la cantidad del préstamo:"));
let interesAnual = parseFloat(prompt("Por favor, ingresa el interés anual (%):"));
let plazoMeses = parseInt(prompt("Por favor, ingresa el plazo del préstamo en meses:"));
let montoPrestamo = calcularMontoPrestamo(cantidadPrestamo, interesAnual, plazoMeses);
alert("El monto del préstamo es: " + montoPrestamo);