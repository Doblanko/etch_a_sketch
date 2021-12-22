function createGrid(gridSize = 64) {
    // Clear the gridContainer and setup the number of rows/columns
    gridContainer.innerHTML = ""
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;


    // Create squares to form a grid
    for (let i=0; i < gridSize**2; i++){
        let gridSquare = document.createElement("div")
        gridContainer.appendChild(gridSquare);
    }
}

function hoverOver(event) {
    // Don't alter the container, only the gridsquares and only if mouse clicked
    if (event.target !== gridContainer && mouseClicked) {
        event.target.style.backgroundColor = 'black';
    }
}

function resetGrid() {
    createGrid();
}

// trigger the start of the application
const gridContainer = document.querySelector('.grid-container');
createGrid();

// add the draw function. only draw if hovering and clicked
let mouseClicked = false;
gridContainer.addEventListener('mouseover', hoverOver);
gridContainer.addEventListener('mousedown', () => {
    mouseClicked = true;
});
gridContainer.addEventListener('mouseup', () => {
    mouseClicked = false;
})
gridContainer.addEventListener('dragstart', (event) => {
    event.preventDefault();
})


// add the reset function
const resetGridContainerButton = document.querySelector('#reset-grid-container')
resetGridContainerButton.addEventListener('click', resetGrid)