document.addEventListener('DOMContentLoaded', function () {
    const fechaInput = document.getElementById('fecha');
    const horaSelect = document.getElementById('hora');
    const message = document.getElementById('message');

    const horasPorFecha = {
        '2024-04-12': ['10:00', '12:00', '15:00'],
        '2024-04-13': ['11:00', '13:00', '16:00'],
        '2024-04-14': ['09:00', '14:00', '17:00']
    };

    fechaInput.addEventListener('change', function () {
        const fechaSeleccionada = fechaInput.value;
        const horasDisponibles = horasPorFecha[fechaSeleccionada] || [];

        if (horasDisponibles[0] == null) {
            let messageError = document.createElement('p');
            messageError.textContent = 'No hay reservas disponibles para esta fecha';
            messageError.style.color = 'red';
            let firstElement = message.firstChild;
            message.insertBefore(messageError, firstElement);

        } else {
            let messageErrorExistente = document.querySelector('#message p');
            if (messageErrorExistente) {
                let allme = document.querySelectorAll('#message p');
                allme.forEach(element =>{
                    element.remove();
                })
            }
        }


        horaSelect.innerHTML = '';

        horasDisponibles.forEach(hora => {
            const option = document.createElement('option');
            option.textContent = hora;
            option.value = hora;
            horaSelect.appendChild(option);
        });
    });
});
