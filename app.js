const initSize = 16;

function createField(size) {
    let container = document.querySelector('#container');
    container.innerHTML = '';

    let header = document.createElement('h1');
    header.innerText = 'Etch-a-Sketch';
    container.appendChild(header);

    let field = document.createElement('div');
    field.id = 'field';
    field.classList.add('field');

    for (let row = 0; row < size; row++) {

        let newRow = document.createElement('div');
        newRow.id = `row-${row}`;
        newRow.classList.add('row');

        for (let cell = 0; cell < size; cell++) {

            let square = document.createElement('div');
            square.id = `square-${row}-${cell}`;
            square.classList.add('square');
            newRow.appendChild(square);
            square.addEventListener('mouseover', (e) => {
                mouseOver(e);
            })
        }

        field.appendChild(newRow);

    }

    container.appendChild(field);

    let controls = document.createElement('div');
    controls.classList.add('controls');

    let size16btn = document.createElement('button');
    size16btn.innerText = '16x16';
    controls.appendChild(size16btn);

    let size32btn = document.createElement('button');
    size32btn.innerText = '32x32';
    controls.appendChild(size32btn);

    let size64btn = document.createElement('button');
    size64btn.innerText = '64x64';
    controls.appendChild(size64btn);
    
    container.appendChild(controls);
    
    bindButtons();
}

function mouseOver(e) {

    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, 1)`;

}

function bindButtons(){
    let btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        button.addEventListener('click', (e) => {
            let text = e.target.innerText
            createField(text.substr(0,2));
            
        })
    })
}

createField(initSize);
