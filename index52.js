function verificarAnagramas(palabra1, palabra2) {
    if (palabra1.length !== palabra2.length) {
        return false;
    }
    let frecuenciaLetras1 = {};
    let frecuenciaLetras2 = {};
    for (let letra of palabra1) {
        frecuenciaLetras1[letra] = (frecuenciaLetras1[letra] || 0) + 1;
    }
    for (let letra of palabra2) {
        frecuenciaLetras2[letra] = (frecuenciaLetras2[letra] || 0) + 1;
    }
    for (let letra in frecuenciaLetras1) {
        if (!(letra in frecuenciaLetras2) || frecuenciaLetras2[letra] !== frecuenciaLetras1[letra]) {
            return false;
        }
    }
    return true;
}

let palabra1 = prompt("Por favor, ingresa la primera palabra:");
let palabra2 = prompt("Por favor, ingresa la segunda palabra:");
if (verificarAnagramas(palabra1, palabra2)) {
    alert("Las palabras son anagramas.");
} else {
    alert("Las palabras no son anagramas.");
}
