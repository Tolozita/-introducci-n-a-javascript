function aplicarDescuento(costoOriginal) {
    let descuento = costoOriginal * 0.1;
    let costoConDescuento = costoOriginal - descuento;
    return costoConDescuento;
}

let costoOriginal = parseFloat(prompt("Por favor, ingresa el costo original de los medicamentos:"));
let costoConDescuento = aplicarDescuento(costoOriginal);
alert("El costo con descuento es: " + costoConDescuento);