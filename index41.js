function calcularMayorMenorPromedio(numeros) {
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    return { mayor, menor, promedio };
}

let numeros = [];
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Por favor, ingresa el número " + i + ":"));
    numeros.push(numero);
}
let resultadosCalculo = calcularMayorMenorPromedio(numeros);
alert("El número mayor es: " + resultadosCalculo.mayor +
    "\nEl número menor es: " + resultadosCalculo.menor +
    "\nEl promedio de los números es: " + resultadosCalculo.promedio);
