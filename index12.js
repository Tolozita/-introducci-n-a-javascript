function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

let baseRectangulo = parseFloat(prompt("Por favor, ingresa la base del rectángulo:"));
let alturaRectangulo = parseFloat(prompt("Por favor, ingresa la altura del rectángulo:"));
let areaRectangulo = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
alert("El área del rectángulo es: " + areaRectangulo);
