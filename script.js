const container = document.querySelector(".container");
const button = document.querySelector(".create");
const slider = document.querySelector(".slider");
const info = document.querySelector(".info");
const colour = document.querySelectorAll(".colour");
let option = "Blue";

createGrid(1);




button.addEventListener("click", (e) => {
    clearGrid();
    createGrid(`${slider.value}`)
} )
function createGrid(n) {
    let a = n;
    n = n * n;
    for (let i = 1; i <= n; i++) {
        const grid = document.createElement("div");
        container.appendChild(grid);
        grid.classList.add("grid");
        grid.setAttribute("style", `width: ${640 / a}px`)
        tmp = grid.getAttribute("style");
        grid.setAttribute("style", tmp + `; height: ${640 / a}px`)
        

    } return grids = document.querySelectorAll(".grid").forEach((div) => {
        div.addEventListener("mouseover", (e) => {   
            if (option !== "") {
                div.className ="grid";
                div.classList.add(`${option}`)
            } else {
                div.classList.add("Red")
            }

        })
    })
    
} 


function clearGrid() {
    const clear = document.querySelectorAll(".grid");
    clear.forEach((e) => {
        e.remove();
    })
}


slider.addEventListener("input", () => {
    clearGrid();
    createGrid(slider.value);
    info.textContent = `${slider.value} x ${slider.value}`;
})


colour.forEach(addEventListener("click", (e) => {
    return option = e.target.innerText;

}))