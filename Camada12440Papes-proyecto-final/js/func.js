let preguntas = [
    {
        pregunta: "¿Tenes Tos?",
        puntos: 1
    },
    {
        pregunta: "¿Tenes Frio?",
        puntos: 1
    },
    {
        pregunta: "¿Tenes Diarrea?",
        puntos: 1
    },
    {
        pregunta: "¿Tenes estornudos?",
        puntos: 1
    },
    {
        pregunta: "¿Te duele el cuerpo?",
        puntos: 1
    },
    {
        pregunta: "¿Tenes dolor de cabeza?",
        puntos: 1
    },
    {
        pregunta: "¿Tenes fiebre?",
        puntos: 2
    },
    {
        pregunta: "¿Tenes dificultades para respirar?",
        puntos: 2
    },
    {
        pregunta: "¿Tenes sintomas de fatiga?",
        puntos: 2
    },
    {
        pregunta: "¿Viajaste hace 14 dias?",
        puntos: 3
    },
    {
        pregunta: "¿Tuviste contacto directo con un paciente de Covid-19?",
        puntos: 3
    }
];

function preguntasAleatorias(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

preguntasAleatorias(preguntas);

let sumatoria = 0;
alert("Responde con SI o NO");
preguntas.forEach(function (value, index, array) {
    let respuesta = prompt(value.pregunta);
    if (respuesta.toUpperCase() === "SI") {
        sumatoria = sumatoria + value.puntos;
    }
});

alert("Sumatoria de Puntos " + sumatoria);
