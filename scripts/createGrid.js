function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    const red = randomBetween(0, 255);
    const green = randomBetween(0, 255);
    const blue = randomBetween(0, 255);

    return `background-color: rgb(${red}, ${green}, ${blue});`;
}

function createGrid(size) {
    const grid = document.querySelector('#grid');
    const createdGrid = document.createElement('div');

    createdGrid.setAttribute('id', 'createdGrid');
    createdGrid.setAttribute('class', 'flex fixed-size');
    grid.appendChild(createdGrid);

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.classList.add('grow');
        for (let k = 1; k <= size; k++) {
            const block = document.createElement('div');

            row.appendChild(block);
            
            block.classList.add('block');
            const square = `width: ${680 / size}px; height: ${680 / size}px`;

            block.setAttribute('style', square);
            block.addEventListener('mouseover', () => {
                block.setAttribute('style', randomRGB() + square)
            });
        }

        createdGrid.appendChild(row);
    }
}

createGrid(16);