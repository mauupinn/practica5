function calcularPromedio(c1, c2, c3) {
    let promedio = (c1 + c2 + c3) / 3;
    return promedio;
}

function determinarResultado(promedio) {
    if (promedio >= 70) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function mostrarResultado() {
    let nombre = document.getElementById("nombre").value;
    let matricula = document.getElementById("matricula").value;
    let c1 = parseFloat(document.getElementById("unidad1").value);
    let c2 = parseFloat(document.getElementById("unidad2").value);
    let c3 = parseFloat(document.getElementById("unidad3").value);

    let promedio = calcularPromedio(c1, c2, c3);
    let estado = determinarResultado(promedio);

    alert(`Nombre: ${nombre}\nMatrícula: ${matricula}\nPromedio: ${promedio.toFixed(2)}\nEstado: ${estado}`);
}