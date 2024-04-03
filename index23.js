function convertirKmPorHoraAMetrosPorSegundo(velocidadKmPorHora) {
    let velocidadMetrosPorSegundo = velocidadKmPorHora * (1000 / 3600);
    return velocidadMetrosPorSegundo;
}

let velocidadKmPorHora = parseFloat(prompt("Por favor, ingresa la velocidad en kilómetros por hora:"));
let velocidadMetrosPorSegundo = convertirKmPorHoraAMetrosPorSegundo(velocidadKmPorHora);
alert("La velocidad en metros por segundo es: " + velocidadMetrosPorSegundo);