function determinarGrupo() {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let sexo = prompt("Por favor, ingresa tu sexo (F para femenino, M para masculino):");
    if (nombre && sexo) {
        let grupo = "";
        if ((sexo.toUpperCase() === "F" && nombre.toUpperCase() < "M") || (sexo.toUpperCase() === "M" && nombre.toUpperCase() > "N")) {
            grupo = "A";
        } else {
            grupo = "B";
        }
        alert("Tu grupo es: " + grupo);
    } else {
        alert("Por favor, ingresa tu nombre y sexo.");
    }
}

determinarGrupo();