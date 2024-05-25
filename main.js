const grid = document.querySelector('.grid')

function clearGrid() {
    grid.innerHTML = '';
}

function generateGrid(size) {
    clearGrid();
    for (let i = 0; i < size * size; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.style.flex = `0 0 calc(100% / ${size})`;
        grid.appendChild(item);
        item.addEventListener("mouseover", () => item.style.backgroundColor = "blue");
        }
};

generateGrid(50);

const sizeBtn = document.querySelector("#size")
sizeBtn.addEventListener("click", () => {
    let size = 0;
    do {
        size = parseInt(prompt("Enter the size of the grid from 1 to 100 :"));
    } while (size === 0 || size > 100);
    generateGrid(size);
})


