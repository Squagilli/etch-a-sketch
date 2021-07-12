const container = document.querySelector('#container');

const gridItem = document.querySelector('.cell');


function makeCells() {
    for (i = 0; i < 4096; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
makeCells();



function drawPicture(e) {
    
    e.target.style.backgroundColor = 'red';

}

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('mouseover', drawPicture));



