// 1. <div class = "block">;
//     </div>
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст "элемент внутри" и задать стили:
// Цвет текста синий, рамка сплошная черная, цвет фона #f8f8f8, внутренний отступ 16px. 
// Добавить к данному блоку класс "item_1" (использовать setAttribute).

const block = document.querySelector('.block');

const itemDiv = document.createElement('div');
itemDiv.classList.add('item');
itemDiv.textContent = 'Элемент внутри';

itemDiv.style.color = 'blue';
itemDiv.style.border = '1px solid black';
itemDiv.style.backgroundColor = '#f8f8f8';
itemDiv.style.padding = '16px';

block.appendChild(itemDiv);

block.setAttribute('class', 'item_1');





// 2. Дан код
// <div cass = "elem">
// <img src="photo.png" alt="photo">
// <div class="content">
// <h2 class="heading">Lorem, ipsum dolor. </h2>
// <p class="text">Lorem, ipsum dolor sit amet consectetur adipising elit. Recusandae, ea! </p>
// </div>
// </div>
//2.1 Необходимо с помощью querySelector найти параграф с классом text
// 2.2. Вывести в консоль соседний элемент h2
// 2.3. Вывести в консоль родительский элемент content
// 2.4. Вывести в консоль картинку
// 2.5. Вывести в консоль родительский элемент elem 

const textElem = document.querySelector('.text');

const headingElem = textElem.previousElementSibling;
console.log(headingElem);

const contentElem = textElem.parentNode;
console.log(contentElem);

const imgElem = document.querySelector('img');
console.log(imgElem);

const elemElem = contentElem.parentNode;
console.log(elemElem);




// 3. С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей
<div class = "item">
    <div class = "elem">
        <div class = "info">
            <h2 class = "subtitle"> Lorem, ipsum dolor.</h2>
        </div>
    </div>
</div>

const h2Element = document.querySelector('h2.subtitle');

let parentElement = h2Element.parentNode;
console.log(parentElement);

while (parentElement) { //пока есть родительский элемент, цикл выполняется 
    console.log(parentElement);
    parentElement = parentElement.parentNode; //цикл остановится на body, когда закончатся родительские элементы
}

// 4.
const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(input.value.trim() === '') {
        const errorMassage = document.createElement('h2');
        errorMassage.textContent = 'Вы не заполнили поле ввода';
        errorMassage.style.border = '2px solid red';
        form.insertBefore(errorMassage, btn);
    }
})
