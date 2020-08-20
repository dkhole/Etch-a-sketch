let btn = document.querySelector("input");
let container = document.getElementById("container");
let rows = 16;
let cols = 16;

btn.addEventListener("click", () => {
    let rows = Number(prompt("How many rows?"));
    let cols = Number(prompt("How many columns?"));

    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }

    generateGrid(rows, cols);
    colorCell();
})

function generateGrid(r, c) {
    for(let i = 0; i < (r * c); i++) {
        let div = document.createElement("div");
        container.appendChild(div).className = "cell";
        div.style.backgroundColor = "rgb(255,255,255)";
    }
    
    let root = document.documentElement;
    root.style.setProperty("--grid-rows", r);
    root.style.setProperty("--grid-cols", c);
}

function colorCell() {
    let cells = document.querySelectorAll("div.cell");
    let r = 255;
    let g = 255;
    let b = 255;
    
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")";
        })
    })
}

generateGrid(17, 17);

colorCell();

