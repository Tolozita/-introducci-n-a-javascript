function convertirCentigradosAFahrenheit(gradosCentigrados) {
    let gradosFahrenheit = (gradosCentigrados * 9 / 5) + 32;
    return gradosFahrenheit;
}

let gradosCentigrados = parseFloat(prompt("Por favor, ingresa la temperatura en grados centígrados:"));
let gradosFahrenheit = convertirCentigradosAFahrenheit(gradosCentigrados);
alert("La temperatura en grados Fahrenheit es: " + gradosFahrenheit);