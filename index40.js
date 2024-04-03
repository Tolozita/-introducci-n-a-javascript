function ordenarNumerosAscendente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

let numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Por favor, ingresa el tercer número:"));
let numerosOrdenados = ordenarNumerosAscendente(numero1, numero2, numero3);
alert("Los números ordenados de forma ascendente son: " + numerosOrdenados.join(", "));