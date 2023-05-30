
/*
1.1. Поиск в интернете (бесплатные api примеры)
1.2. Найти любые данные, на произвольную тему
1.3. Установить расширение в браузер “JSON viewer”
1.4. Пример найденного json объекта
*/


/*
2.1. Создать файл data.js
2.2. Создать переменную dataInfo
2.3. Добавить несколько данных в dataInfo
*/
<body>
    <div class="content"></div>
    <script type="module" src="index.js"></script>
</body>
/*
3.1. Создать файл index.html
3.2. Подключить data.js
3.3. Добавить блок <div class="content"></div>
3.4. Создать переменную data и добавить в нее JSON parse данные из файла data.js
3.5. Вывести в консоль объект data
3.6. С помощью foreach обойти массив data
3.7. Вывести все изображения из данных
*/

data.js:
export const dataInfo = `[
    {
        "id": "1",
        "name": "Vladimir",
        "age": "50",
        "url": "https://autowise.com/wp-content/uploads/2016/04/2016-Chevrolet-Camaro-SS-V-8-homepage.jpg"
    },
    {
        "id": "2",
        "name": "Ivan",
        "age": "19",
        "url": "https://www.zastavki.com/pictures/1024x1024/2015/Movies_Transformer_Bumblebee__movie_Transformers_108333_31.jpg"
    },
    {
        "id": "83",
        "name": "Aleksey",
        "age": "24",
        "url": "https://kadet39.ru/wp-content/uploads/b/b/4/bb41064a18725498e0dbeef95ce72cf1.png"
    }
]`;

index.js:
import { dataInfo } from './data.js';

const data = JSON.parse(dataInfo);

console.log(data);

const content = document.querySelector('.content');




/*
4.1. Создать все необходимые заголовки, параграфы изображения (из данных json)
4.2. Добавить все содержимое в блок контент
4.3. Добавить стили при необходимости
*/
// data.forEach(({id, name, age, url}) => {
//     const div = document.createElement('div');
//     div.classList.add('card');

//     const img = document.createElement('img');
//     img.classList.add('card-img-top');
//     img.src = url;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const title = document.createElement('h5');
//     title.classList.add('card-title');
//     title.textContent = name;

//     const subtitle = document.createElement('h6');
//     subtitle.classList('card-title', 'mb-2', 'text-muted');
//     subtitle.textContent = age;

//     const idPara = document.createElement('p');
//     idPara.classList.add('card-text');
//     idPara.textContent = `ID ${id}`

//     cardBody.appendChild(title);
//     cardBody.appendChild(subtitle);
//     cardBody.appendChild(idPara);

//     div.appendChild(img);
//     div.appendChild(cardBody);

//     content.appendChild(div);

// })


data.forEach(({ id, name, age, url }) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = url;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = name;

  const subtitle = document.createElement("h6");
  subtitle.classList.add("card-title", "mb-2", "text-muted");
  subtitle.textContent = age;

  const idPara = document.createElement("p");
  idPara.classList.add("card-text");
  idPara.textContent = `ID ${id}`;

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(idPara);

  div.appendChild(img);
  div.appendChild(cardBody);

  content.appendChild(div);
});



