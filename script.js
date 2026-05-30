function scrollAFormulario() {
    document.getElementById('formulario-cita').scrollIntoView({ behavior: 'smooth' });
}

function procesarCita(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const auto = document.getElementById('auto').value;
    const mensajeBox = document.getElementById('msgCita');
    mensajeBox.innerText = `¡Excelente ${nombre}! Recolección agendada para tu ${auto}. Un chofer te llamará en unos minutos.`;
    mensajeBox.style.display = 'block';
    document.getElementById('appointmentForm').reset();
}

function simularPago() {
    const orden = document.getElementById('numOrden').value;
    const mensajePago = document.getElementById('msgPago');
    
    if(orden.trim() === "") {
        alert("Por favor, ingresa tu número de orden enviado por WhatsApp.");
        return;
    }
    mensajePago.innerText = `Orden ${orden} localizada. Total de refacciones y mano de obra autorizada por video: $2,450.00 MXN. Redirigiendo a pasarela de pago segura...`;
    mensajePago.style.display = 'block';
}
