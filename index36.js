function generarSerieFibonacci(n) {
    let serie = [0, 1];
    for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
}

let cantidadElementos = parseInt(prompt("Por favor, ingresa la cantidad de elementos de la serie Fibonacci que deseas generar:"));
let serieFibonacci = generarSerieFibonacci(cantidadElementos);
alert("La serie Fibonacci es: " + serieFibonacci.join(", "));