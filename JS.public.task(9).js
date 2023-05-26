/*
1.1. В html создать элемент checkbox и текст рядом с ним “Согласен
с условиями”
1.2.Добавить кнопку отправить
1.3.При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
1.4. Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
*/
<input type="checkbox" id="agree"> Согласен с условиями
<button id="submit">Отправить</buttton>

const checkbox = document.getElementById('agree');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
  if (!checkbox.checked) {
    const error = document.createElement('div'); //если не установлен флажок, то создаем элемент div...
    error.textContent = 'Необходимо согласиться с условием';
    checkbox.parentNode.appendChild(error)
  }
});

/*
2.1. В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
2.2. Кнопка отправить
2.3.Если выбран чай, необходимо вывести сообщение “Чай
закончился”
2.4.Если выбран кофе, необходимо вывести соообщение “кофе
закончился”
*/
<input type="radio" name="drink" value="tea"> Чай
<input type="radio" name="drink" value="coffee"> Кофе
<button id="submit">Отправить</buttton>

const teaButton = document.querySelector('input[name="drink"][value="tea"]');
const coffeeButton = document.querySelector('input[name="drink"][value="coffee"]');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
  if (teaButton.checked) {
    alert('Чай закончился');
  } else if (coffeeButton.checked) {
    alert('Кофе закончился');
  }
});

/*
3.1. Создать поле ввода (пароль)
3.2. Кнопка отправить
3.3.Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
3.4. Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный” //Задание на валидность, проверку
*/
<input type="password" id="password-field" placeholder="Введите пароль"> 
<button id="submit-button">Отправить</buttton>
<div id="message"> </div>

const passwordField = document.getElementById('password-field');
const submitButton = document.getElementById('submit-button');
const vessage = document.getElementById('message');

submitButton.addEventListener('click',  () => {
  if (passwordField.value === 'пароль') {
    message.style.color = 'green';
    passwordField.stye.borderColor = 'green';
    passwordField.stye.borderWidth = '2px';
    passwordField.setCustomValidity('Пароль верный'); //текмт будет выведен в окошке комментария, если пароь верен
    passwordField.reportValidity();
  } else { {
    message.style.color = 'red';
    passwordField.stye.borderColor = 'red';
    passwordField.stye.borderWidth = '2px';
    passwordField.setCustomValidity('Пароль не верный'); //текмт будет выведен в окошке комментария, если пароь  не верен и рамка будет красной
    passwordField.reportValidity();
});


/*
4.1.Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
4.2. При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
*/

