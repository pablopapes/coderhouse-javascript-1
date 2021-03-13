function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
}

function comparar(a, b) {
    const edadA = a.edad;
    const edadB = b.edad;

    let comparar = 0;
    if (edadA > edadB) {
        comparar = -1;
    } else if (edadA < edadB) {
        comparar = 1;
    }
    return comparar;
}


listaDePersonas = [];

for (let i = 0; i < 5; i++) {
    var persona = new Persona(
        prompt("Ingrese el nombre de la persona"),
        parseInt(prompt("ingrese la edad de la persona"))
    )
    listaDePersonas.push(persona);
}


console.log(listaDePersonas.sort(comparar));