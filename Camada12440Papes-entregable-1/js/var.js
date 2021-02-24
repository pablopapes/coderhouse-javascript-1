let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su Edad");
let ciudad = prompt("Ciudad donde reside actualmente");
let fechaActual = new Date();
let anio = fechaActual.getFullYear();
let anioNacimiento =  anio - parseInt(edad);


alert("Hola " + nombre + "! actualmente vives en " + ciudad + " y tienes " + parseInt(edad) + ", posiblemente nacio en el año " + parseInt(anioNacimiento));
