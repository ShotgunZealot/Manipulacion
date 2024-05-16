let fieldIndex = 1;

function addField() {
    const fieldsContainer = document.getElementById('fieldsContainer');
    const newField = document.createElement('div');
    newField.classList.add('form-field');
    newField.innerHTML = `
        <input type="text" name="field${fieldIndex + 1}" placeholder="Campo ${fieldIndex + 1}" required>
        <button type="button" onclick="removeField(this)">Eliminar</button>
    `;
    fieldsContainer.appendChild(newField);
    fieldIndex++;
}

function removeField(button) {
    const fieldToRemove = button.parentNode;
    fieldToRemove.parentNode.removeChild(fieldToRemove);
}