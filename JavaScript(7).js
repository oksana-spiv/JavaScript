<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework 5</title>
</head>

<body>


// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

```
<p class="dropdown">Привет :)</p>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<script>
    "use strict";
[]()
[]()

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
 let elems = document.querySelectorAll('.dropdown-item');
    elems.forEach(elem => elem.classList.add('super-dropdown'));


// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnScnd = document.querySelector('.btn');
btnScnd.classList.remove('btn-secondary');
//.classList.toggle('btn-secondary');


// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu"
const clMenu = document.querySelector('.menu');
clMenu.classList.remove('dropdown-menu');
  
  
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropdown = document.querySelector('.dropdown');
dropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');


// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const repId = document.getElementById('dropdownMenuButton');
repId.id = 'superDropdown';


// 6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
document.querySelector('[aria-labelledby="dropdownMenuButton"]')
 .dataset
 .dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
document.querySelector('.dropdown-toggle').removeAttribute('type');


