function generarEstrellas(puntuacion) {
    let estrellas = "";
    for (let i = 0; i < Math.floor(puntuacion); i++) {
        estrellas += "⭐";
    }
    return estrellas;
}

let puntuacionUsuario = parseFloat(prompt("Por favor, ingresa la puntuación (0-5):"));
let estrellasGeneradas = generarEstrellas(puntuacionUsuario);
alert("Las estrellas generadas son: " + estrellasGeneradas);
