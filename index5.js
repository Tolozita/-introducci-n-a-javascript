function tributarImpuesto() {
    let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
    let ingresos = parseFloat(prompt("Por favor, ingresa tus ingresos mensuales en USD:"));
    if (!isNaN(edad) && !isNaN(ingresos)) {
        if (edad > 16 && ingresos >= 1000) {
            alert("Debes tributar impuestos.");
        } else {
            alert("No debes tributar impuestos.");
        }
    } else {
        alert("Por favor, ingresa valores numéricos válidos.");
    }
}

tributarImpuesto();