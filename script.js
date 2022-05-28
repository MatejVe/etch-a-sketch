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

for (var row of gridDiv.children) {
    for (var el of row.children) {
        el.addEventListener('mouseenter', () => {
            el.classList.add('hovered');
        });
    };
};