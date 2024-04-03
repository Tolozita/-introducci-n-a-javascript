
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let baseTriangulo = parseFloat(prompt("Por favor, ingresa la base del triángulo:"));
let alturaTriangulo = parseFloat(prompt("Por favor, ingresa la altura del triángulo:"));
let areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
alert("El área del triángulo es: " + areaTriangulo);
