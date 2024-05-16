document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const selectList = document.getElementById('selectList');

    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();

        for (let option of selectList.options) {
            const text = option.textContent.toLowerCase();
            const isSelected = option.selected;

            if (text.includes(searchText)) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }

            option.selected = isSelected;
        }
    });
});
