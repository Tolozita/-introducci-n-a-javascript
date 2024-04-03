function calcularAreaCilindro(radio, altura) {
    let area = 2 * Math.PI * radio * (radio + altura);
    return area;
}

let radioCilindro = parseFloat(prompt("Por favor, ingresa el radio del cilindro:"));
let alturaCilindro = parseFloat(prompt("Por favor, ingresa la altura del cilindro:"));
let areaCilindro = calcularAreaCilindro(radioCilindro, alturaCilindro);
alert("El área del cilindro es: " + areaCilindro);