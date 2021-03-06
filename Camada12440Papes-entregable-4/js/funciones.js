function ingresarCuotas() {
    let cuotasHabilitadas = [12, 18, 36];
    let cuota = parseInt(prompt("Ingrese la cantidad de cuotas"));
    if (!cuotasHabilitadas.includes(cuota)) {
        alert("Las cuotas ingresadas no correspoden con las cuotas vigentes, por favor ingrese las cuotas nuevamentes");
        cuota = ingresarCuotas();
    }
    return cuota;
}

function ingresarMonto() {
    let montosHabilitados = [10000, 20000, 50000];
    let monto = parseInt(prompt("Ingrese el monto a solicitar"));
    if (!montosHabilitados.includes(monto)) {
        alert("El monto ingresado no correspoden con los montos vigentes, por favor ingrese el monto nuevamente");
        monto = ingresarMonto();
    }
    return monto;
}

function calcularCuotas(monto, cuota) {
    let MontoCuotas = 0;
    switch (cuota) {
        case 12:
            MontoCuotas = CalcularMonto(monto, cuota, 0.1)
            break;
        case 18:
            MontoCuotas = CalcularMonto(monto, cuota, 0.2)
            break
        case 36 :
            MontoCuotas = CalcularMonto(monto, cuota, 0.3)
            break
    }
    return MontoCuotas;
}

function CalcularMonto(monto, cuotas, interes) {
    return Math.round((monto + (monto * interes)) / cuotas);
}


alert("El monto a solicitar puede ser 10000, 20000 o 50000");

let monto = ingresarMonto();

alert("las cuotas pueden ser 12, 18 o 36");

let cuota = ingresarCuotas();

alert("Usted solicito $" + monto + " en " + cuota + " cuotas" + " : valor de la cuota final $" + calcularCuotas(monto, cuota));
