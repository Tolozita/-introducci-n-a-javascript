
function calcularMedia(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

let cantidadNumeros = parseInt(prompt("Por favor, ingresa la cantidad de números a promediar:"));
let listaNumeros = [];
for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseFloat(prompt("Por favor, ingresa el número " + (i + 1) + ":"));
    listaNumeros.push(numero);
}
let media = calcularMedia(listaNumeros);
alert("La media de los números ingresados es: " + media);
