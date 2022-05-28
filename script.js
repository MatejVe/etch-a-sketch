const gridDiv = document.querySelector('.grid');


for (var i = 0; i < 16; i++) {
    var rowBox = document.createElement('div');
    rowBox.classList.add("rowBox");

    for (var j = 0; j < 16; j++) {
        var box = document.createElement('div');
        box.classList.add('box');
        rowBox.appendChild(box)
    }

    gridDiv.appendChild(rowBox);
};

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.setAttribute('style', 'background-color:black;');
    });
});