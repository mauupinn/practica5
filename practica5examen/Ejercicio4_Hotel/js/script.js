function obtenerTarifa() {
    let tipo = document.getElementById("tipoHabitacion").value;
    let costoHabitacion = 0;

    if (tipo === "Sencilla") {
        costoHabitacion = 800;
    } else if (tipo === "Doble") {
        costoHabitacion = 1200;
    } else if (tipo === "Suite") {
        costoHabitacion = 2000;
    }

    return costoHabitacion;
}

function calcularHospedaje(costoHabitacion, numNoches) {
    let costoHospedaje = costoHabitacion * numNoches;
    return costoHospedaje;
}

function calcularImpuesto(costoHospedaje) {
    let iva = costoHospedaje * 0.16;
    return iva;
}

function calcularTotal(costoHospedaje) {
    let costoFinal = costoHospedaje * 1.16;
    return costoFinal;
}

function mostrarReservacion() {
    let nombreHuesped = document.getElementById("nombreHuesped").value;
    let tipoHabitacion = document.getElementById("tipoHabitacion").value;
    let numNoches = parseInt(document.getElementById("numNoches").value);

    let tarifa = obtenerTarifa();
    let subtotal = calcularHospedaje(tarifa, numNoches);
    let iva = calcularImpuesto(subtotal);
    let costoFinal = calcularTotal(subtotal);

    alert(`Huésped: ${nombreHuesped} \nHabitación: ${tipoHabitacion} \nNoches: ${numNoches} \nTarifa de habitación (${tipoHabitacion}): $${tarifa}
Subtotal: $${subtotal} \nIVA: $${iva.toFixed(2)} \nTotal de la reservación: $${costoFinal.toFixed(2)}`);
}