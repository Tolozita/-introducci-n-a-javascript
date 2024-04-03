function calcularMultiplos(numero) {
    let multiplos = [];
    for (let i = 1; i <= 10; i++) {
        multiplos.push(numero * i);
    }
    return multiplos;
}

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número para calcular sus múltiplos:"));
let multiplosCalculados = calcularMultiplos(numeroUsuario);
alert("Los múltiplos de " + numeroUsuario + " son: " + multiplosCalculados.join(", "));