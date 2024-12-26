const container = document.querySelector('.container');
const div = document.createElement('div');
div.classList.add('box');
container.appendChild(div);

const elements = [
    { tag: 'p', text: 'Frase 1' },
    { tag: 'div', text: 'Frase 2' },
    { tag: 'section', text: 'Frase 3' },
    { tag: 'footer', text: 'Frase 4' },
]


for(let i = 0; i < elements.length; i++){
    let { tag, text } = elements[i]
    let createTag = document.createElement(tag)
    createTag.innerText = text
    div.appendChild(createTag) 
}