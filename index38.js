function convertirBinarioADecimal(binario) {
    let decimal = parseInt(binario, 2);
    return decimal;
}

let numeroBinario = prompt("Por favor, ingresa un número en formato binario:");
let numeroDecimal = convertirBinarioADecimal(numeroBinario);
alert("El número en formato decimal es: " + numeroDecimal);