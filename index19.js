function calcularAreaVolumenCilindro(radio, altura) {
    let area = 2 * Math.PI * radio * (radio + altura);
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    return { area, volumen };
}

let radioCilindro = parseFloat(prompt("Por favor, ingresa el radio del cilindro:"));
let alturaCilindro = parseFloat(prompt("Por favor, ingresa la altura del cilindro:"));
let resultadosCilindro = calcularAreaVolumenCilindro(radioCilindro, alturaCilindro);
alert("El área del cilindro es: " + resultadosCilindro.area + "\nEl volumen del cilindro es: " + resultadosCilindro.volumen);