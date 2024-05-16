document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const productSelect = document.getElementById('product');
    
    const optionsByCategory = {
        frutas: ['Manzana', 'Banana', 'Naranja'],
        verduras: ['Zanahoria', 'Lechuga', 'Papa']
    };
    
    function updateProductOptions() {
        const selectedCategory = categorySelect.value;
        const options = optionsByCategory[selectedCategory];
        
        productSelect.innerHTML = '';
        
        options.forEach(function (option) {
            const optionElement = document.createElement('option');
            optionElement.textContent = option;
            productSelect.appendChild(optionElement);
        });
    }
    
    categorySelect.addEventListener('change', updateProductOptions);
    
    updateProductOptions();
});
