function ecoUsuario() {
    let entradaUsuario;
    do {
        entradaUsuario = prompt("Escribe algo (escribe 'salir' para terminar):");
        if (entradaUsuario.toLowerCase() !== "salir") {
            console.log(entradaUsuario);
        }
    } while (entradaUsuario.toLowerCase() !== "salir");
}

ecoUsuario();