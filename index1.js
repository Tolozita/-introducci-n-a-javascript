
function verificarEdad() {
    while (true) {
        let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
        if (!isNaN(edad) && edad >= 0) {
            if (edad >= 18) {
                alert("Eres mayor de edad.");
                alert("Puedes Ingresar");
            } else {
                alert("Eres menor de edad.");
            }
            break;
        } else {
            alert("Por favor, ingresa un número positivo válido.");
        }
    }
}

verificarEdad();

