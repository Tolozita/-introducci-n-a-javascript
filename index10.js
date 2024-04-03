function elegirIngredientes() {
    let vegetariana = confirm("¿Deseas una pizza vegetariana?");
    let ingredientesDisponibles = "Mozzarella, tomate";
    if (vegetariana) {
        let ingrediente = prompt("Elige un ingrediente para tu pizza vegetariana (pimiento, tofu):");
        ingredientesDisponibles += ", " + ingrediente;
    } else {
        let ingrediente = prompt("Elige un ingrediente para tu pizza no vegetariana (pepperoni, jamón, salmón):");
        ingredientesDisponibles += ", " + ingrediente;
    }
    return ingredientesDisponibles;
}

let ingredientesPizza = elegirIngredientes();
alert("Ingredientes de la pizza: " + ingredientesPizza);