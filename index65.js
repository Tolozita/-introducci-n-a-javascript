function calcularHorasMinutosSegundos(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
    return { horas, minutos, segundosRestantes };
}

let totalSegundos = parseInt(prompt("Por favor, ingresa el total de segundos:"));
let tiempoCalculado = calcularHorasMinutosSegundos(totalSegundos);
alert("Horas: " + tiempoCalculado.horas + "\nMinutos: " + tiempoCalculado.minutos + "\nSegundos: " + tiempoCalculado.segundosRestantes);