function obtenerTarifa() {
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;
    let tarifa = 0;

    if (tipoVehiculo === "Camioneta") {
        tarifa = 1200;
    } else if (tipoVehiculo === "SUV") {
        tarifa = 900;
    } else if (tipoVehiculo === "Economico") {
        tarifa = 500;
    }

    return tarifa;
}

function calcularRenta(tarifa, diasRenta) {
    let subtotalRenta = tarifa * diasRenta;
    return subtotalRenta;
}

function calcularDescuento(subtotalRenta, diasRenta) {
    if (diasRenta > 4) {
        let descuento = subtotalRenta * 0.1;
        subtotalRenta = subtotalRenta - descuento;
    }
    return subtotalRenta;
}

function calcularSeguro(diasRenta) {
    let seguroAdicional = document.getElementById("seguroAdicional");
    let seguro = 0;
    if (seguroAdicional.checked) {
        seguro = 150 * diasRenta;
    }
    return seguro;
}

function calcularImpuesto(subtotalRenta) {
    let iva = subtotalRenta * 0.16;
    return iva;
}

function calcularTotal(subtotalRenta, seguro) {
    let total = (subtotalRenta * 1.16) + seguro;
    return total;
}

function mostrarContrato() {
    let cliente = document.getElementById("cliente").value;
    let vehiculo = document.getElementById("tipoVehiculo").value;
    let diasRenta = parseInt(document.getElementById("diasRenta").value);

    let tarifa = obtenerTarifa();
    let subtotal = calcularRenta(tarifa, diasRenta);
    let subtotalConDesc = calcularDescuento(subtotal, diasRenta);
    let seguro = calcularSeguro(diasRenta);
    let iva = calcularImpuesto(subtotalConDesc);
    let total = calcularTotal(subtotalConDesc, seguro);

    alert(`Cliente: ${cliente} \nTipo de vehículo: ${vehiculo} \nDías de renta: ${diasRenta} \nTarifa diaria: $${tarifa} \nSubtotal: $${subtotal}
Descuento aplicado: $${(subtotal - subtotalConDesc).toFixed(2)} \nSubtotal con descuento: $${subtotalConDesc.toFixed(2)} \nIVA: $${iva.toFixed(2)} \nSeguro: $${seguro}
TOTAL A PAGAR: $${total.toFixed(2)}`);
}