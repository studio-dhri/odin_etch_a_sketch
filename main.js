const container = document.querySelector("#container");
const button = document.querySelector("button");
button.addEventListener("click", newSlate);

let sideLength = 16;

function newSlate() {
    let defaultValue = sideLength.toString();
    do {
        sideLength = parseInt(prompt("Enter number of squares per side for the new grid (max 100)", defaultValue));
    } while (sideLength > 0 && sideLength > 100)
    container.replaceChildren();
    drawGrid(sideLength);
}

function drawGrid(gridSize) {
    let pixelSize = (720 / gridSize);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("pixel");
            squareDiv.style.width = pixelSize + "px";
            squareDiv.style.height = pixelSize + "px";
            container.appendChild(squareDiv);
            squareDiv.addEventListener("mouseenter", () => squareDiv.classList.add("hovered"));
        }
    }
}

