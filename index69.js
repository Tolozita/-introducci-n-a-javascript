function calcularVolumenCilindro(radio, altura) {
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    return volumen;
}

let radioCilindro = parseFloat(prompt("Por favor, ingresa el radio del cilindro:"));
let alturaCilindro = parseFloat(prompt("Por favor, ingresa la altura del cilindro:"));
let volumenCilindro = calcularVolumenCilindro(radioCilindro, alturaCilindro);
alert("El volumen del cilindro es: " + volumenCilindro);