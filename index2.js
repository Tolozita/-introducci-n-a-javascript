
function verificarContraseña() {
    let contraseñaGuardada = "contraseña";
    while (true) {
        let contraseñaIngresada = prompt("Por favor, ingresa tu contraseña:");
        if (contraseñaIngresada === contraseñaGuardada) {
            alert("¡Contraseña correcta!");
            break;
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    }
}

verificarContraseña();

