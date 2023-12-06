// Etch-a-Sketch

let size = 16
let color = 'black'
let click = false // creates boolean for start drawing with mouseover after click


function populateBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Elimina los elementos existentes antes de agregar nuevos
    board.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', paintSquare);
        square.classList.add('square');
        square.style.backgroundColor = '#fff';
        square.style.border = '1px solid #f5f4f1';

        // Agregar cada square al board
        board.appendChild(square);
        
    }
}

const gridSizeSlider = document.querySelector('#gridSizeSlider');
const gridSizeLabel = document.querySelector('#gridSizeLabel');

// Agregar evento para cambiar el tamaño del grid al mover la barra deslizante
gridSizeSlider.addEventListener('input', function () {
    const gridSize = gridSizeSlider.value;
    gridSizeLabel.textContent = `Tamaño: ${gridSize}x${gridSize}`;
    populateBoard(gridSize);
});

// Llama a la función inicialmente con el tamaño predeterminado
populateBoard(16);

// Obtener referencia al botón de color y al input de color
const colorPickerBtn = document.querySelector('.colorPicker');
let rgbColor = document.querySelector('.rgbColor')


function changeColor(choice) {

    // Si el color es 'input', obtener el valor del input de color
    if (choice === 'colorPickerBtn') {
        color = rgbColor.value;
        
    } else {
        color = choice;
    }
}

//  Como elegir color para pintar Squares
function paintSquare () {
    if (click) { 
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)` // crear variable de color randoms
    } else {
       this.style.backgroundColor = color 
    }} 
}



// Funcion que reincia el grid
function clearGrid() {
    let board = document.querySelector('.board')
   let square = board.querySelectorAll('div');
   square.forEach((div) =>  {div.style.backgroundColor = ' white'})

}


document.querySelector('.board').addEventListener('click', () => {
    click = !click
})




