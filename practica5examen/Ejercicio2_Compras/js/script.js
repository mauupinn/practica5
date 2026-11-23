function calcularSubtotal(precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
}

function calcularDescuento(subtotal) {
    if (subtotal >= 1000 && subtotal < 3000) {
        subtotal = subtotal * 0.95;
    }
    else if (subtotal >= 3000) {
        subtotal = subtotal * 0.9;
    }
    return subtotal;
}

function descuentoAplicado(subtotal) {
    if (subtotal >= 1000 && subtotal < 3000) {
        return 5;
    } 
    else if (subtotal >= 3000) {
        return 10;
    }
    return 0;
}

function calcularTotal(precio, cantidad) {
    let subtotal = calcularSubtotal(precio, cantidad);
    let total = calcularDescuento(subtotal);
    return total;
}

function mostrarTicket() {
    let cliente  = document.getElementById("nombre").value;
    let producto = document.getElementById("producto").value;
    let precio   = parseFloat(document.getElementById("precio").value);
    let cantidad = parseFloat(document.getElementById("cantidad").value);

    let subtotal   = calcularSubtotal(precio, cantidad);
    let total      = calcularTotal(precio, cantidad);
    let descuento  = subtotal - total;
    let porcentaje = descuentoAplicado(subtotal);
    alert(`Nombre: ${cliente} \nProducto: ${producto} \nCantidad: ${cantidad}
    \nSubtotal: ${subtotal} \nDescuento: ${descuento} \nPorcentaje: ${porcentaje}% \nTotal a pagar: ${total}`);
}