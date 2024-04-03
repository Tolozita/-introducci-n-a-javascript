function contarAparicionesLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

let fraseUsuario = prompt("Por favor, ingresa una frase:");
let letraUsuario = prompt("Por favor, ingresa una letra para contar su aparición en la frase:");
let cantidadApariciones = contarAparicionesLetra(fraseUsuario, letraUsuario);
alert("La letra '" + letraUsuario + "' aparece " + cantidadApariciones + " veces en la frase.");