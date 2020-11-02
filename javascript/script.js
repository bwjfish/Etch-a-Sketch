/* clear the current nxn grid */
function clearGrid() {
    let grid = document.getElementsByClassName("grid-container")[0];
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

/* Create an nxn grid */
function createGrid(n = 16) {
    let grid = document.getElementsByClassName("grid-container")[0];
    for (let i = 0; i < n*n; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = "black";
        })
        grid.appendChild(cell);
    }
    console.log(grid.childElementCount);
    let templateColumnsStyle = "auto ".repeat(n);
    templateColumnsStyle = templateColumnsStyle.slice(0, -1);
    grid.style.gridTemplateColumns = templateColumnsStyle; 
}

function restartHandler(e) {
    let rows = "";
    do {
        rows = window.prompt("Enter a number between 1-100.");
    } while (isNaN(rows) || parseInt(rows) > 100 || parseInt(rows) < 1);
    clearGrid();
    createGrid(parseInt(rows));
}

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restartHandler);

// function randomHandler(e) {
//     grid = document.getElementsByClassName("grid")[0];
//     cells = grid.children;
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].addEventListener("mouseenter", function(e) {
//             cells[i].style.backgroundColor = "#" 
//                 + Math.floor(Math.random()*16777215).toString(16);
//         })
//     }
// }
// let random = document.getElementById("#random-button");
// randomButton.addEventListener("click", randomHandler);

createGrid();

