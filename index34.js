function generarContrasenaAleatoria(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contrasena;
}

let longitudContrasena = parseInt(prompt("Por favor, ingresa la longitud de la contraseña aleatoria:"));
let contrasenaAleatoria = generarContrasenaAleatoria(longitudContrasena);
alert("La contraseña aleatoria generada es: " + contrasenaAleatoria);