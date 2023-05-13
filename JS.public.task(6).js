// 1.1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль.
<div id = "block">
   <p>1</p>
  <p>2</p>
</div>
const firstParagraphInBlock = document.querySelector("#block p:first-child");
console.log(firstParagraphInBlock);

/
const blockDiv = document.getElementById('block')
const firstParagraph = blockDiv.getElementsByTagName('p')[0];
console.log(firstParagraph);

//1.2. Получите ссылку на первый абзац с классом wwww. и вывести его в консоль.
<p class="www">text 1</p>
<p class="www">text 2</p>
const firstParagraphInClass = document.querySelector('.www');
console.log(firstParagraphInClass);       
  
 /
const firstParagraphWithClass = document.querySelectorAll(".www")[1];
console.log(firstParagraphWithClass);
// 
 const firstParagraphInBlock = document.querySelector('#block p:first-child');
console.log(firstParagraphInBlock);

///
const firstParagraphWithClass = document.querySelectorAll('.www')[1];
console.log(firstParagraphWithClass);

////
const wwwParagraphs = document.getElementsByClassName('www');
const firstWWWParagraph = wwwParagraphs[0]
console.log(firstParagraph);

const wwwParagraphs = document.querySelectorAll('.www');
wwwParagraphs.forEach((p) => console.log(p))

// 2.1 Дан тег <a class="link" href="#"> link text html </a>
// необходимо поменять текст внутри ссылки на "link text js"
// заменить href на значение https:\\developer.mozila.org\ru\
const link = document.querySelector('.link');
link.textContent = 'link text js'
link.setAttribute('href', 'https://developer.mozilla.org/ru/')


// 2.2. Дан тег <img class ="photo" src="" flt = "">
// необходимо с помощью js поменять значение src на любое изображение из интернета
const img = document.querySelector('.photo');
img.setAttribute('src', 'https://carhumor.net/wp-content/uploads/2011/06/car-wallpaper-0021.jpg')

//  3.1. Дан тег <div class="content"> </div>
// создайте новый элемент p
// добавьте в него текст "новый текстовый элемент"
// добавьте созданный элемент внутри <div class="content"> </div>
// удалить добавленный узел
const contentDiv = document.querySelector('.content');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Новый текстовый элемент';
contentDiv.appendChild(newParagraph);  //указываем место новому элементу в дереве сайцта.до этого элемент был как бы в воздухе
contentDiv.removeChild(newParagraph); //удаляем


// 4. Создать элемент button, добавить в блок <div class="content"></div>
// при клике на который в консоль выводится, сколько раз пользователь нажал на данную кнопку
const contentDiv = document.querySelector('.content');
const newButton = document.createElement('button');
newButton.textContent = 'Нажми меня';
contentDiv.appendChild(newButton);

let clickCount = 0;

newButton.addEventListener('click', () => {
clickCount++;
console.log(`Количество нажатий ${clickCount}`);
})

const resetButton = document.createElement('button');
resetButton.textContent = 'Сброс';
resetButton.setAttribute('id', 'resetButton');
resetButton.addEventListener('click', function() {
clickCount = 0;
console.log('Счётчик обнулён');
})
// const content = document.querySelector('.content');
contentDiv.appendChild(resetButton);

// 5. Дан тег <div class="content"></div>
// Создать элемент button, добавить текст для кнопки "отправить"
// при клике на кнопку текст должен поменяться на "текст отправлен"
const contentDiv = document.querySelector('.content');
const button = document.createElement('button');
button.textContent = 'Отправить';

button.addEventListener('click', () => {
button.textContent = 'Текст отправлен';
setTimeout(() => {
button.textContent = 'Отправить';
}, 1500);
});

contentDiv.appendChild(button);
