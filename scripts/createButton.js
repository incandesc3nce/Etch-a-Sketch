const container = document.querySelector('#button-container');

const button = document.createElement('button');
button.textContent = 'Reset'

container.appendChild(button);
button.setAttribute('class', 'button');

button.addEventListener('click', () => {
    const newSize = parseInt(prompt('Enter n squares in new n x n grid:'));
    if (newSize > 100) {
        alert("Amount of squares can't be more than 100!") 
        return;
    };
    if (isNaN(newSize) || newSize < 1) {
       alert("Enter valid amount of squares.");
       return;
    }
    document.getElementById('createdGrid').remove();
    createGrid(newSize);
})