const container = document.querySelector(".container");
const button = document.querySelector(".create");
button.addEventListener("click", (e) => {
    clearGrid();
    createGrid(16);
} )
function createGrid(n) {
    let a = n;
    n = n * n;
    for (let i = 1; i <= n; i++) {
        const grid = document.createElement("div");
        container.appendChild(grid);
        grid.classList.add("grid");
        grid.setAttribute("style", `width: ${800 / a}px`)
        tmp = grid.getAttribute("style");
        grid.setAttribute("style", tmp + `; height: ${800 / a}px`)
        

    } return grids = document.querySelectorAll(".grid").forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            div.classList.add("black")
        })
    })
    
} 


function clearGrid() {
    const clear = document.querySelectorAll(".grid");
    clear.forEach((div) => {
        div.remove();
    })
}

