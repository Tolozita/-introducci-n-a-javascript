function calcularPerimetroTriangulo(a, b, c) {
    let perimetro = a + b + c;
    return perimetro;
}

let lado1 = parseFloat(prompt("Por favor, ingresa la longitud del primer lado del triángulo:"));
let lado2 = parseFloat(prompt("Por favor, ingresa la longitud del segundo lado del triángulo:"));
let lado3 = parseFloat(prompt("Por favor, ingresa la longitud del tercer lado del triángulo:"));
let perimetroTriangulo = calcularPerimetroTriangulo(lado1, lado2, lado3);
alert("El perímetro del triángulo es: " + perimetroTriangulo);