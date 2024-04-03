

function calcularImpuestoRenta() {
    let rentaAnual = parseFloat(prompt("Por favor, ingresa tu renta anual en USD:"));
    if (!isNaN(rentaAnual)) {
        let impuesto = 0;
        if (rentaAnual >= 10000 && rentaAnual < 20000) {
            impuesto = rentaAnual * 0.05;
        } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
            impuesto = rentaAnual * 0.1;
        } else if (rentaAnual >= 35000 && rentaAnual < 60000) {
            impuesto = rentaAnual * 0.2;
        } else if (rentaAnual >= 60000) {
            impuesto = rentaAnual * 0.45;
        }
        alert("El impuesto correspondiente es: " + impuesto.toFixed(2) + " USD");
    } else {
        alert("Por favor, ingresa un valor numérico válido.");
    }
}

calcularImpuestoRenta();