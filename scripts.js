const container = document.querySelector('#container');

const gridItem = document.querySelector('.cell');

const clearBtn = document.querySelector('.clearBtn');
clearBtn.innerText = 'Clear';

const optBtn = document.querySelector('.options');
optBtn.innerText = 'Options';

const header = document.querySelector('#header');
header.innerText = 'Etch-a-Sketch';


function makeCells() {
    for (i = 0; i < 4096; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

makeCells();

function drawPicture(e) {
    
    e.target.style.backgroundColor = '#3500D3';

}

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('mouseover', drawPicture));







