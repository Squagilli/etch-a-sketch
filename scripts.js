const container = document.querySelector('#container');

const cell = document.createElement('div');
cell.innerText = 'X';

function makeCells(rows, columns) {
    rows = rows.forEach(container.appendChild(cell));
    columns = columns.forEach(container.appendChild(cell));

    return rows, columns;


}

makeCells(16, 16);