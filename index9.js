function calcularPrecioEntrada(edad) {
    let precio = 0;
    if (edad < 4) {
        precio = 0;
    } else if (edad >= 4 && edad <= 18) {
        precio = 5;
    } else {
        precio = 10;
    }
    return precio;
}

let edadCliente = parseInt(prompt("Por favor, ingresa la edad del cliente:"));
let precioEntrada = calcularPrecioEntrada(edadCliente);
alert("El precio de la entrada es: " + precioEntrada + "€");