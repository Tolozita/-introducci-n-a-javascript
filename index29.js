function comprobarFortalezaContrasena(contrasena) {
    let expresionRegular = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
    return expresionRegular.test(contrasena);
}

let contrasenaUsuario = prompt("Por favor, ingresa tu contraseña:");
if (comprobarFortalezaContrasena(contrasenaUsuario)) {
    alert("La contraseña es válida y segura.");
} else {
    alert("La contraseña no cumple con los requisitos de seguridad.");
}
