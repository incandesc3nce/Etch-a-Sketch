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
            block.setAttribute('style', `width: ${680 / size}px; height: ${680 / size}px`)
            block.addEventListener('mouseover', () => {
                block.classList.add('hover');
            });
        }

        createdGrid.appendChild(row);
    }
}

createGrid(16);