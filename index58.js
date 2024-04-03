function calcularImpuestoSobreRenta(salario) {
    let impuesto = 0;
    if (salario <= 10000) {
        impuesto = 0;
    } else if (salario > 10000 && salario <= 20000) {
        impuesto = salario * 0.1;
    } else if (salario > 20000 && salario <= 35000) {
        impuesto = salario * 0.15;
    } else if (salario > 35000 && salario <= 60000) {
        impuesto = salario * 0.2;
    } else {
        impuesto = salario * 0.25;
    }
    return impuesto;
}

let salarioAnual = parseFloat(prompt("Por favor, ingresa el salario anual para calcular el impuesto sobre la renta:"));
let impuestoSobreRenta = calcularImpuestoSobreRenta(salarioAnual);
alert("El impuesto sobre la renta a pagar es: " + impuestoSobreRenta);