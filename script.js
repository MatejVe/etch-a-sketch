const gridDiv = document.querySelector('.grid');

const createGrid = function(gridDimension=16) {
    for (var i = 0; i < gridDimension; i++) {
        var rowBox = document.createElement('div');
        rowBox.classList.add("rowBox");
    
        for (var j = 0; j < gridDimension; j++) {
            var box = document.createElement('div');
            box.classList.add('box');
            rowBox.appendChild(box);
        }
    
        gridDiv.appendChild(rowBox);
    };
    
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.setAttribute('style', 'background-color:black;');
        });
    });   
};

createGrid();

const changeSizeBtn = document.querySelector('#gridSize');

changeSizeBtn.addEventListener('click', () => {
    let validNumber = false;

    while (!validNumber) {
        var newSize = prompt("Please enter the size of the grid");
        if (newSize < 101 && newSize > 0) {
            validNumber = true;
        };
    };

    while (gridDiv.firstElementChild) {
        gridDiv.firstElementChild.remove();
    };

    createGrid(newSize);
});