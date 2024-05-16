document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        const requiredFields = form.querySelectorAll('[required]');

        let allFieldsFilled = true;
        requiredFields.forEach(function (field) {
            if (!field.value.trim()) {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            event.preventDefault();
            alert('Por favor, complete todos los campos obligatorios.');
        }
    });
});
