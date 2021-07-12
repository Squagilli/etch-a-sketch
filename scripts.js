const container = document.querySelector('#container');




function makeCells(rows, columns) {
    
    for (i = 0; i < 4096; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.innerText = 'x';
    }


}

makeCells();

