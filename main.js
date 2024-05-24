const mainContainer = document.querySelector('.container')

function generateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.style.flex = `0 0 calc(100% / ${size})`;
        // item.style.width = `${800/size}px`;
        // item.style.height = `${800/size}px`;
        mainContainer.appendChild(item);
        }
};

generateGrid(30);
