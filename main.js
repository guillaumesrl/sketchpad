const grid = document.querySelector('.grid')
let size = 16;
let colorBool = false;

function clearDiv() {
    grid.innerHTML = '';
}

function getColor() {
    const r = Math.floor(Math.random(1) * 256);
    const g = Math.floor(Math.random(1) * 256);
    const b = Math.floor(Math.random(1) * 256);
    console.log(`rgb(${r},${g},${b})`);
    return `rgb(${r},${g},${b})`;
}

function generateGrid(size) {
    clearDiv();
    for (let i = 0; i < size * size; i++) {
        let color = "blue";
        const item = document.createElement('div');
        item.classList.add('item');
        item.style.flex = `0 0 calc(100% / ${size})`;
        grid.appendChild(item);
        item.addEventListener("mouseover", () => {
            let color = (colorBool) ? getColor() : "blue";
            
            item.style.backgroundColor = color
        });
    }
};

generateGrid(size);

const sizeBtn = document.querySelector("#size")
sizeBtn.addEventListener("click", () => {
    size = 0;
    do {
        size = parseInt(prompt("Enter the size of the grid from 1 to 100 :"));
    } while (size < 1 || size > 100);
    generateGrid(size);
});

function clearGrid() {
    generateGrid(size);
}

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clearGrid();
});

const rainbowButton = document.querySelector("#rainbow")
rainbowButton.addEventListener("click", () => {
    if (rainbowButton.textContent === "Activate rainbow") {
        colorBool = true;
        rainbowButton.textContent = "Back to blue";
    } else {
        colorBool = false;
        rainbowButton.textContent = "Activate rainbow"
    }
});




