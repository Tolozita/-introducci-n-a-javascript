function calcularCostoLlamada(tiempo) {
    let costoPorMinuto = 355;
    let costoConIVA = costoPorMinuto * tiempo * 1.2;
    return costoConIVA;
}

let duracionLlamada = parseInt(prompt("Por favor, ingresa la duración de la llamada en minutos:"));
let costoLlamada = calcularCostoLlamada(duracionLlamada);
alert("El costo de la llamada es: " + costoLlamada + " pesos (incluyendo el IVA)");