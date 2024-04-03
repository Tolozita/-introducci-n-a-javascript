function generarCodigoAleatorio(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let codigo = "";
    for (let i = 0; i < longitud; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

let longitudCodigo = parseInt(prompt("Por favor, ingresa la longitud del código aleatorio:"));
let codigoAleatorio = generarCodigoAleatorio(longitudCodigo);
alert("El código aleatorio generado es: " + codigoAleatorio);