

function calcularVolumenEsfera(radio) {
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    return volumen;
}

let radioEsfera = parseFloat(prompt("Por favor, ingresa el radio de la esfera:"));
let volumenEsfera = calcularVolumenEsfera(radioEsfera);
alert("El volumen de la esfera es: " + volumenEsfera);