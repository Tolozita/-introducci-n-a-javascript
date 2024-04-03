function encontrarPrimerRepetido(lista) {
    let repetidos = new Set();
    for (let i = 0; i < lista.length; i++) {
        if (repetidos.has(lista[i])) {
            return lista[i];
        }
        repetidos.add(lista[i]);
    }
    return "No hay elementos repetidos";
}

let listaOriginal = prompt("Por favor, ingresa una lista de elementos separados por comas:");
let listaSeparada = listaOriginal.split(",");
let primerRepetido = encontrarPrimerRepetido(listaSeparada);
alert("El primer elemento repetido es: " + primerRepetido);