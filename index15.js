function calcularLongitudYAreaCircunferencia(radio) {
    let longitud = 2 * Math.PI * radio;
    let area = Math.PI * radio * radio;
    return { longitud, area };
}

let radioCircunferencia = parseFloat(prompt("Por favor, ingresa el radio de la circunferencia:"));
let resultadosCircunferencia = calcularLongitudYAreaCircunferencia(radioCircunferencia);
alert("Longitud de la circunferencia: " + resultadosCircunferencia.longitud + "\nÁrea de la circunferencia: " + resultadosCircunferencia.area);