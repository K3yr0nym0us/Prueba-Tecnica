'use strict'

/* Aqui va su codigo */





/* CONFIG DEL BUSCADOR NO TOCAR */
const buscador = () => {

    const tabla = document.querySelector('[data-table]');
    const input = document.querySelector('[data-finder]');
    let total = 0;
    
    input.addEventListener('keyup', () => {
        const inputSearch = input.value.toLowerCase();

        for (let i = 1; i < tabla.rows.length; i++) {
            let found = false;
            const cellsOfRow = tabla.rows[i].getElementsByTagName('td');

            for (let j = 0; j < cellsOfRow.length && !found; j++) {
                const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                if (inputSearch.length == 0 || compareWith.indexOf(inputSearch) > -1) {
                    found = true;
                    total++;
                };
            };

            if (found) {
                tabla.rows[i].style.display = '';

            } else {
                tabla.rows[i].style.display = 'none';
            };
        };
    });
};

buscador();
