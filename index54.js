function sumarDigitos(numero) {
    let suma = 0;
    while (numero !== 0) {
        suma += numero % 10;
        numero = Math.floor(numero / 10);
    }
    return suma;
}

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número para sumar sus dígitos:"));
let sumaDigitos = sumarDigitos(numeroUsuario);
alert("La suma de los dígitos en el número es: " + sumaDigitos);