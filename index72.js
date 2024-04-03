function invertirPalabra(palabra) {
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;
}

let palabraUsuario = prompt("Por favor, ingresa una palabra para invertirla:");
let palabraInvertida = invertirPalabra(palabraUsuario);
alert("La palabra invertida es: " + palabraInvertida);