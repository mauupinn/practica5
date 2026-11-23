function obtenerCostoConsulta() {
    let costoConsulta;

    if (document.getElementById("tipoConsulta").value === "General") {
        costoConsulta = 300;
    } else if (document.getElementById("tipoConsulta").value === "Especialidad") {
        costoConsulta = 600;
    } else if (document.getElementById("tipoConsulta").value === "Urgencia") {
        costoConsulta = 900;
    }

    return costoConsulta;
}

function calcularCostoTotal(costoConsulta, numConsultas) {
    let costoTotal = costoConsulta * numConsultas;
    return costoTotal;
}

function validarEdad(edad) {
    if (edad >= 0 && edad <= 120) {
        return true;
    } else {
        return false;
    }
}

function mostrarInformacion() {
    let paciente = document.getElementById("paciente").value;
    let tipoConsulta = document.getElementById("tipoConsulta").value;
    let edad = parseInt(document.getElementById("edad").value);
    let costoConsulta = obtenerCostoConsulta(tipoConsulta);
    let numConsultas = parseInt(document.getElementById("numConsultas").value);
    let costoTotal = calcularCostoTotal(costoConsulta, numConsultas);

    if (validarEdad = true) {

    
    alert(`Paciente: ${paciente}\nEdad: ${edad} \nConsulta: ${tipoConsulta} 
    \nCosto por consulta: ${costoConsulta} \nConsultas a realizar: ${numConsultas} \nCosto total: ${costoTotal}`);
    } else {
        alert("Edad invalida");
    }
}