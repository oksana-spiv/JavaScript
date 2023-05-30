/*Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.
*/

fetch('https://api.openweathermap.org/data/2.5/weather?q=Voronezh&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    console.log(`Temperature: ${temperature}, Humidity: ${humidity}, Wind Speed: ${windSpeed}`);
  })
  .catch(error => console.error(error))

    const temperatureElement = document.getElementById('temperature');
    temperatureElement.innerText = `${temperature}°C`;

    const weatherDescriptionElement = document.getElementById('weather-description');
    weatherDescriptionElement.innerText = weatherDescription;

    const weatherIconElement = document.getElementById('weather-icon');
    weatherIconElement.setAttribute('src', weatherIconUrl);
  })
  .catch(error => console.error(error))


/*
Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).
*/
<body>
    <div class="content">
      
    </div>
    <script type="module" src="data.js"></script>
</body>


const content = document.querySelector('.content');

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = url;

  const title = document.createElement("h1");
  title.classList.add("card-title");
  title.textContent = myTitle;

  const parag = document.createElement("p");
  parag.classList.add("card-text");
  parag.textContent = `Lorem20`;

  cardBody.appendChild(title);
  cardBody.appendChild(parag);

  div.appendChild(img);
  div.appendChild(cardBody);

  content.appendChild(div);
});



