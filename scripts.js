const container = document.querySelector('#container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
        for (i = 0; i < (rows * cols); i++) {
            let cell = document.createElement('div');
            cell.innerText = (i + 1);
            container.appendChild(cell).className = 'gridItem';
        };
};

makeGrid(16, 16);