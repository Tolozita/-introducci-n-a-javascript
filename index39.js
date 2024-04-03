function convertirDecimalABinario(decimal) {
    let binario = decimal.toString(2);
    return binario;
}

let numeroDecimal = parseInt(prompt("Por favor, ingresa un número en formato decimal:"));
let numeroBinario = convertirDecimalABinario(numeroDecimal);
alert("El número en formato binario es: " + numeroBinario);
