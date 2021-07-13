const container = document.querySelector('#container');

const gridItem = document.querySelector('.cell');

const clearBtn = document.querySelector('.clearBtn');
clearBtn.innerText = 'Clear';

const optBtn = document.querySelector('.options');
optBtn.innerText = 'Options';

const header = document.querySelector('#header');
header.innerText = 'Etch-a-Sketch';



function makeCells(rows, columns) { // generates cells of specified size
    for (i = 0; i < (rows * columns); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        
    }
}

let length = 64;
let width = 64;

makeCells(length, width);



function drawPictureDefault(e) { // changes color of hovered cells
    e.target.style.backgroundColor = '#3500D3'; 
}
function drawPictureBlue(e) {
    e.target.style.backgroundColor = '#3500D3'; 
}
function drawPictureRed(e) {
    e.target.style.backgroundColor = 'red'; 
}
function drawPictureGreen(e) {
    e.target.style.backgroundColor = 'green'; 
}
function drawPictureYellow(e) {
    e.target.style.backgroundColor = 'yellow'; 
}

const cells = document.querySelectorAll('.cell');

const blueColor = document.querySelector('.blue')
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const yellowColor = document.querySelector('.yellow');

cells.forEach(cell => cell.addEventListener('mouseover', drawPictureDefault));

blueColor.addEventListener('click', function() {
    cells.forEach(cell => cell.addEventListener('mouseover', drawPictureBlue));
})
redColor.addEventListener('click', function() {
    cells.forEach(cell => cell.addEventListener('mouseover', drawPictureRed));
})
greenColor.addEventListener('click', function() {
    cells.forEach(cell => cell.addEventListener('mouseover', drawPictureGreen));
})
yellowColor.addEventListener('click', function() {
    cells.forEach(cell => cell.addEventListener('mouseover', drawPictureYellow));
})



clearBtn.addEventListener('click', function () {
    document.querySelectorAll('.cell').forEach(item => item.style.backgroundColor = '#282828');
})








