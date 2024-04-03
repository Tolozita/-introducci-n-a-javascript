function calcularDigitoVerificador(ruc) {
    let suma = 0;
    let coeficientes = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 10; i++) {
        suma += parseInt(ruc.charAt(i)) * coeficientes[i];
    }
    let resto = suma % 11;
    let digitoVerificador = 11 - resto;
    if (resto === 0) {
        digitoVerificador = 0;
    } else if (resto === 1) {
        digitoVerificador = "No tiene dígito verificador";
    }
    return digitoVerificador;
}

let rucEmpresa = prompt("Por favor, ingresa el RUC de la empresa (11 dígitos):");
let digitoVerificador = calcularDigitoVerificador(rucEmpresa);
alert("El dígito verificador del RUC es: " + digitoVerificador);
