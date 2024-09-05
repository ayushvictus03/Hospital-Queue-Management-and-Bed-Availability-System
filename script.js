const searchInput = document.querySelector('#searchInput');
const tableRows = document.querySelectorAll('tbody tr');


searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let match = false;

        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                match = true;
            }
        });

        if (match) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});