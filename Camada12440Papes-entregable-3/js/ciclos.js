let sumatoria = 0;

alert("Ingrese los ultimos 10 resultados de sus examenes")
for (let i = 1; i <= 10; i++) {
    let resultadoExamen = parseInt(prompt("Ingrese el resultado del examen Nº " + i));
    sumatoria = sumatoria + resultadoExamen;
    console.log("Examen Nº" + i + " resultado: " + resultadoExamen);
}

let promedio = sumatoria / 10;

let aprobado
if (promedio >= 7) {
    aprobado = true;
} else {
    aprobado = false;
}

switch (aprobado) {
    case true:
        alert("Usted promociono la materia , su promedio es " + promedio);
        break;
    case false:
        alert("Usted no promociono la materia , su promedio es " + promedio);
        break;
    default:
        console.log("No tenemos datos suficientes");
}