function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Triángulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triángulo isósceles";
        } else {
            return "Triángulo escaleno";
        }
    } else {
        return "No es un triángulo válido";
    }
}

let lado1 = parseFloat(prompt("Por favor, ingresa la longitud del primer lado del triángulo:"));
let lado2 = parseFloat(prompt("Por favor, ingresa la longitud del segundo lado del triángulo:"));
let lado3 = parseFloat(prompt("Por favor, ingresa la longitud del tercer lado del triángulo:"));
let tipoTriangulo = verificarTriangulo(lado1, lado2, lado3);
alert("El triángulo es: " + tipoTriangulo);