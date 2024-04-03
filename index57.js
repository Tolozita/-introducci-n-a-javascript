function verificarCreditCard(cc) {
    let numero = cc.toString();
    let suma = 0;
    let alternate = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero.charAt(i));
        if (alternate) {
            digito *= 2;
            if (digito > 9) {
                digito = (digito % 10) + 1;
            }
        }
        suma += digito;
        alternate = !alternate;
    }
    return (suma % 10 === 0);
}

let numeroTarjeta = parseInt(prompt("Por favor, ingresa el número de tarjeta de crédito:"));
if (verificarCreditCard(numeroTarjeta)) {
    alert("El número de tarjeta de crédito es válido.");
} else {
    alert("El número de tarjeta de crédito no es válido.");
}