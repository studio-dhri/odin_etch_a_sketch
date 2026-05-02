const container = document.querySelector("#container");
const button = document.querySelector("button");
button.addEventListener("click", newSlate)

function newSlate() {
    let sideLength = 16;
    do {
        sideLength = parseInt(prompt("Enter number of squares per side for the new grid (max 100)", "16"));
    } while (sideLength > 100)
    drawGrid(sideLength);
}



const squareDiv = document.createElement("div");
squareDiv.classList.add("pixel");
squareDiv.style.width = "100px";
squareDiv.style.height = "100px";
container.appendChild(squareDiv);

squareDiv.addEventListener("mouseenter", () => squareDiv.classList.add("hovered"));