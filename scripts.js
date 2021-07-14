
// various objects in document
const container = document.querySelector('#container');

const gridItem = document.querySelector('.cell');

const clearBtn = document.querySelector('.clearBtn');
clearBtn.innerText = 'Clear';

const optBtn = document.querySelector('.options');
optBtn.innerText = 'Colors';

const header = document.querySelector('#header');
header.innerText = 'Etch-a-Sketch';

const slider = document.querySelector('#sizeRange');



function makeCells(resolution) { // generates cells of specified size
    let cellArea = resolution * resolution;
    for (i = 0; i <= cellArea; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.style.gridTemplateRows = `repeat(${resolution}, 1fr )`;
        container.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
        container.insertAdjacentElement('beforeend', cell);
    }
    const cells = [...document.querySelectorAll('.cell')]; // all cells selector

    // color buttons
    const blueColor = document.querySelector('.blue')
    const redColor = document.querySelector('.red');
    const greenColor = document.querySelector('.green');
    const yellowColor = document.querySelector('.yellow');
    const orangeColor = document.querySelector('.orange');
    const violetColor = document.querySelector('.violet');
    const indigoColor = document.querySelector('.indigo');
    const blackColor = document.querySelector('.black');
    const whiteColor = document.querySelector('.white');
    const eraser = document.querySelector('.erase');

    // event listeners for mouseover on cells
    cells.forEach(cell => cell.onmouseover = drawPictureBlue); // default color

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
    blackColor.addEventListener('click', function() {
        cells.forEach(cell => cell.onmouseover = drawPictureBlack);
    })
    whiteColor.addEventListener('click', function() {
        cells.forEach(cell => cell.onmouseover = drawPictureWhite);
    })
    eraser.addEventListener('click', function() {
        cells.forEach(cell => cell.onmouseover = erase);
    })

    clearBtn.addEventListener('click', function () {
        document.querySelectorAll('.cell').forEach(item => item.style.backgroundColor = '#182628');
    }) // clears all color
}

function changeSize(){ 
    let gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCell => gridCell.remove());
    makeCells(slider.value);
} // changes size of cells based on slider value


makeCells(16); // default set for mobile compatability


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
function drawPictureBlack(e) {
    e.target.closest('.cell').style.backgroundColor = 'black';
}
function drawPictureWhite(e) {
    e.target.closest('.cell').style.backgroundColor = 'white';
}
function erase(e) {
    e.target.closest('.cell').style.backgroundColor = '#182628';
}

slider.addEventListener('mouseup', changeSize);


// found media query template on w3schools
function mediaQuery(x) {
    slider.addEventListener('mousedown', changeSize);
    if (x.matches) { // If media query matches
      header.textContent = 'Etch-a-Sketch (mobile)';
      document.querySelector('#btnArea').style.width = '350px'
      document.querySelector('.instructions').innerText = 'Tap on the box to draw\nTap the slider to change pixel size';
    } else {
        header.textContent = 'Etch-a-Sketch';
        document.querySelector('.instructions').innerText = 'Mouse over the canvas to draw\nUse slider to change pixel size'
    }
  }
  
  let x = window.matchMedia("(max-width: 700px)")
  mediaQuery(x); // Call listener function at run time
  x.addListener(mediaQuery); // Attach listener function on state changes




