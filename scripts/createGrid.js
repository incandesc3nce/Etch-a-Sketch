function createGrid(size) {
    const grid = document.querySelector('#grid');

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        for (let k = 1; k <= size; k++) {
            const block = document.createElement('div');
            row.appendChild(block);
            block.classList.add('block');
            block.setAttribute('style', 'padding: 1em;')
            block.addEventListener('mouseover', () => {
                block.classList.add('hover');
            });
        }
        grid.appendChild(row);
    }
}

let size = 16;
createGrid(16);