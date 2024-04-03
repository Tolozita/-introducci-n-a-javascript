function division() {
    while (true) {
        try {
            let numero1 = parseFloat(prompt("Ingrese el primer número:"));
            let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (isNaN(numero1) || isNaN(numero2)) {
                throw new Error("Por favor, ingrese números válidos.");
            }
            if (numero2 === 0) {
                throw new Error("Error: El divisor no puede ser cero.");
            }
            let resultado = numero1 / numero2;
            alert("El resultado de la división es: " + resultado);
            break;
        } catch (error) {
            alert(error.message);
        }
    }
}

division();