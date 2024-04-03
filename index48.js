function eliminarDuplicados(lista) {
    let listaSinDuplicados = [];
    for (let i = 0; i < lista.length; i++) {
        if (listaSinDuplicados.indexOf(lista[i]) === -1) {
            listaSinDuplicados.push(lista[i]);
        }
    }
    return listaSinDuplicados;
}

let listaOriginal = prompt("Por favor, ingresa una lista de elementos separados por comas:");
let listaSeparada = listaOriginal.split(",");
let listaSinDuplicados = eliminarDuplicados(listaSeparada);
alert("La lista sin duplicados es: " + listaSinDuplicados.join(","));