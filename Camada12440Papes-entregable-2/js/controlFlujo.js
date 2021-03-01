// sintomas del paciente

alert("Responda con SI o NO a las siguientes preguntas");

let fibre = prompt("¿Usted tiene fiebre? ");
let gradosFiebre = 0;
if (fibre.toUpperCase() == "SI") {
    alert("Responda con un numero");
    gradosFiebre = prompt("¿Cuantos grados de fiebre tiene? ");
}
let tos = prompt("¿Usted tiene tos?");
let cansancio = prompt("¿Usted se siente cansado?");
let olfato = prompt("¿Usted perdio el olfato?");
let gusto = prompt("¿Usted perdio el gusto?");


if (fibre.toUpperCase() == "SI") {
    if (parseInt(gradosFiebre) < 38) {
        if (tos.toUpperCase() == "SI" || cansancio.toUpperCase() == "SI") {
            alert("Posiblemente usted tenga sintomas leves de COVID");
        } else {
            alert("Posiblemente no tenga sintomas de COVID");
        }
    } else {
        if (tos.toUpperCase() == "SI" && cansancio.toUpperCase() == "SI") {
            alert("Posiblemente usted tenga sintomas Graves de COVID");
        } else {
            if (olfato.toUpperCase() == "SI" || gusto.toUpperCase() == "SI") {
                alert("Posiblemente usted tenga sintomas Graves de COVID");
            }
            if (tos.toUpperCase() == "NO" || cansancio.toUpperCase() == "NO") {
                alert("Posiblemente no tenga sintomas de COVID");
            }
        }
    }
} else {
    if (tos.toUpperCase() == "NO" || cansancio.toUpperCase() == "NO") {
        alert("Posiblemente no tenga sintomas de Covid");
    } else {
        alert("Posiblemente usted tenga sintomas leves de COVID");
    }
}