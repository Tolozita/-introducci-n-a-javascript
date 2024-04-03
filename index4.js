function verificarParImpar() {
    let numero = parseInt(prompt("Por favor, ingresa un número entero:"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("El número es par.");
        } else {
            alert("El número es impar.");
        }
    } else {
        alert("Por favor, ingresa un número entero válido.");
    }
}

verificarParImpar();