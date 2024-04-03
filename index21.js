function calcularVolumenElipsoide(ejeMayor, ejeMenor) {
    let volumen = (4 / 3) * Math.PI * ejeMayor * ejeMenor * ejeMenor;
    return volumen;
}

let ejeMayorElipsoide = parseFloat(prompt("Por favor, ingresa el eje mayor del elipsoide:"));
let ejeMenorElipsoide = parseFloat(prompt("Por favor, ingresa el eje menor del elipsoide:"));
let volumenElipsoide = calcularVolumenElipsoide(ejeMayorElipsoide, ejeMenorElipsoide);
alert("El volumen del elipsoide es: " + volumenElipsoide);