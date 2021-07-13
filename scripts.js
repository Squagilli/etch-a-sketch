const container = document.querySelector('#container');

const gridItem = document.querySelector('.cell');

const clearBtn = document.querySelector('.clearBtn');
clearBtn.innerText = 'Clear';

const optBtn = document.querySelector('.options');
optBtn.innerText = 'Colors';

const header = document.querySelector('#header');
header.innerText = 'Etch-a-Sketch';



function makeCells(rows, columns) { // generates cells of specified size
    for (i = 0; i < (rows * columns); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        
    }
}


const small = document.querySelector('.resolutionSmall');
const medium = document.querySelector('.resolutionMed');
const large = document.querySelector('resolutionLarge');

let length = 64;
let width = 64;







makeCells(length, width);


function drawPictureBlue(e) {
    e.target.closest('.cell').style.backgroundColor = 'blue';  
}
function drawPictureRed(e) {
    e.target.closest('.cell').style.backgroundColor = 'red'; 
}
function drawPictureGreen(e) {
    e.target.closest('.cell').style.backgroundColor = 'green';
}
function drawPictureYellow(e) {
    e.target.closest('.cell').style.backgroundColor = 'yellow';
}
function drawPictureOrange(e) {
    e.target.closest('.cell').style.backgroundColor = 'orange';
}
function drawPictureIndigo(e) {
    e.target.closest('.cell').style.backgroundColor = 'indigo';
}
function drawPictureViolet(e) {
    e.target.closest('.cell').style.backgroundColor = 'violet';
}

const cells = [...document.querySelectorAll('.cell')];

const blueColor = document.querySelector('.blue')
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const yellowColor = document.querySelector('.yellow');
const orangeColor = document.querySelector('.orange');
const violetColor = document.querySelector('.violet');
const indigoColor = document.querySelector('.indigo');

cells.forEach(cell => cell.onmouseover = drawPictureBlue);

blueColor.addEventListener('click', function() {
    
    cells.forEach(cell => cell.onmouseover = drawPictureBlue);
})
redColor.addEventListener('click', function() {
    cells.forEach(cell => cell.onmouseover = drawPictureRed);
})
greenColor.addEventListener('click', function() {
    cells.forEach(cell => cell.onmouseover = drawPictureGreen);
})
yellowColor.addEventListener('click', function() {
    cells.forEach(cell => cell.onmouseover = drawPictureYellow);
})
orangeColor.addEventListener('click', function() {
    cells.forEach(cell => cell.onmouseover = drawPictureOrange);
})
violetColor.addEventListener('click', function() {
    cells.forEach(cell => cell.onmouseover = drawPictureViolet);
})
indigoColor.addEventListener('click', function() {
    cells.forEach(cell => cell.onmouseover = drawPictureIndigo);
})

clearBtn.addEventListener('click', function () {
    document.querySelectorAll('.cell').forEach(item => item.style.backgroundColor = '#282828');
})








