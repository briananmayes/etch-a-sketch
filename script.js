/* DOM Manipulation */

const body = document.querySelector('body');
body.style.backgroundColor = 'lavender';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const container = document.querySelector('#container');

const title = document.createElement('h1');
title.textContent = 'Etch-A-Sketch';
title.style.color = 'pink';
title.style.margin = '0px';
body.insertBefore(title, container);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Grid';
resetButton.style.backgroundColor = 'lightpink';
resetButton.style.padding = '8px';
resetButton.style.margin = '8px';
resetButton.style.border = '1px solid white';
resetButton.style.borderRadius = '5px';
resetButton.style.boxShadow = '2px 2px 5px gray';
resetButton.style.fontSize = '16px';


const resetGrid = () => {
    console.log('are we here yet?');
    divs.forEach((div) => div.classList.remove('hover'))
}

body.insertBefore(resetButton, container);

container.style.width = '480px';
//container.style.border = '3px lavender solid';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';


const createGrid = (gridSz, divSz ) => {
    for (let j = 0; j < gridSz; j++) {
        for (let i = 0; i < gridSz; i++) {
            const div = document.createElement('div');
            div.style.width = `${divSz}px`;
            div.style.height = `${divSz}px`;
            div.style.border = '2px solid lavenderblush';
            div.classList.add('grid');
            div.addEventListener('mouseover', () => div.classList.add('hover'));
            container.appendChild(div);
        }
    }
}


const divs = document.querySelectorAll('div');
console.log(divs);
resetButton.addEventListener('click', () => {
    resetGrid();
    const grid = document.querySelectorAll('div');
    grid.forEach((grid) => { if (grid.classList.contains('grid')) container.removeChild(grid)});
    const newGrid = parseInt(window.prompt('Enter the dimensions for your new grid: '));
    const dims = 480 / newGrid;
    createGrid(newGrid, dims);

}
);

const init = () => {
    createGrid(16, 30);
}

init();