function verificarPalindromo(palabra) {
    let palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida;
}

let palabraUsuario = prompt("Por favor, ingresa una palabra para verificar si es palíndromo:");
if (verificarPalindromo(palabraUsuario)) {
    alert("La palabra " + palabraUsuario + " es un palíndromo.");
} else {
    alert("La palabra " + palabraUsuario + " no es un palíndromo.");
}
