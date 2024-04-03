function evaluarDesempeño(puntuacion) {
    let nivel = "";
    let cantidadDinero = 0;
    
    if (puntuacion === 0) {
        nivel = "Inaceptable";
        cantidadDinero = 0;
    } else if (puntuacion === 0.4) {
        nivel = "Aceptable";
        cantidadDinero = 2400 * 0.4;
    } else if (puntuacion === 0.6) {
        nivel = "Meritorio";
        cantidadDinero = 2400 * 0.6;
    } else {
        nivel = "Nivel no válido";
    }

    return { nivel, cantidadDinero };
}

let puntuacion = parseFloat(prompt("Por favor, ingresa la puntuación:"));
let resultado = evaluarDesempeño(puntuacion);
alert("Nivel de rendimiento: " + resultado.nivel + "\nCantidad de dinero: " + resultado.cantidadDinero + "€");