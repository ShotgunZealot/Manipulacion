document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('asyncForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('submit.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Error en la respuesta del servidor.');
        })
        .then(data => {
            statusMessage.textContent = '¡Formulario enviado con éxito!';
            statusMessage.classList.remove('error');
            statusMessage.classList.add('success');
            form.reset();
        })
        .catch(error => {
            statusMessage.textContent = 'Hubo un error al enviar el formulario.';
            statusMessage.classList.remove('success');
            statusMessage.classList.add('error');
        });
    });
});
