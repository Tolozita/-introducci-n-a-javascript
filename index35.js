function determinarPrimo(numero) {
    if (numero <= 1) {
        return false;
    } else if (numero <= 3) {
        return true;
    } else if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número para verificar si es primo:"));
if (determinarPrimo(numeroUsuario)) {
    alert("El número " + numeroUsuario + " es primo.");
} else {
    alert("El número " + numeroUsuario + " no es primo.");
}