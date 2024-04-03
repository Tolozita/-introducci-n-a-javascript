function calcularVelocidadProyectil(distancia, tiempo) {
    let velocidadMetrosSegundo = (distancia * 1000) / (tiempo * 60);
    return velocidadMetrosSegundo;
}

let distanciaRecorrida = 2; // en kilómetros
let tiempoRecorrido = 5; // en minutos
let velocidadProyectil = calcularVelocidadProyectil(distanciaRecorrida, tiempoRecorrido);
alert("La velocidad del proyectil es: " + velocidadProyectil + " metros/segundo");
