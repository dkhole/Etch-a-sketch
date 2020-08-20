let btn = document.querySelector("#size");
let choose = document.getElementById("choose");
let random = document.getElementById("random");
let eraser = document.getElementById("eraser");
let container = document.getElementById("container");
let dimensions = document.getElementById("dimensions");
let rows = 16;
let cols = 16;

btn.addEventListener("click", () => {
    let rows = Number(prompt("How many rows?"));
    let cols = Number(prompt("How many columns?"));

    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }

    generateGrid(rows, cols);
    colorChoice(choose.value);
})

choose.addEventListener("change", () => {
    colorChoice(choose.value);
})

random.addEventListener("click", () => {
    colorRandom();
})

eraser.addEventListener("click", () => {
    colorChoice("#FFFFFF");
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
    dimensions.textContent = r + " x " + c;
}

function colorRandom() {
    let cells = document.querySelectorAll("div.cell");
    let r = 255;
    let g = 255;
    let b = 255;
    
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        })
    })
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

function colorChoice(usersChoice) {
    let cells = document.querySelectorAll("div.cell");
    let hex = cutHex(usersChoice);
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            let r = hexToR(hex);
            let g = hexToG(hex);
            let b = hexToB(hex);
            cell.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        })
    })
}

generateGrid(rows, cols);
colorChoice(choose.value);

