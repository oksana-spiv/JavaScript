//1.1.написать функцию, которой передаем имя, фамилию и возраст.
//получаем строку "привет иван петров с ворастом 17" (только со своими данными).
function greet (firstName, lastName, age) {
return `Привет ${firstName} ${lastName} с возрастом ${+age}`
}
console.log(greet('Vladimir', 'Yakimkov', 32))


//1.2.Создать функцию, котая возводть переданное число в квадрат.
function squareNumber (number) {
return number * number
}
console.log(squareNumber(2));

//1.3. сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
//в первом случае пусть функция выводит в консоль текст "+++",  а во  втором - "---".
function checkNumber (number) {
if (number > 0) {
console.log('+++');
} else if (number < 0) {
console.log('---');
}
}

checkNumber(-5)


//2.Вывести"hello word"
function hello () {
const x = 'Hello';
function world () {
console.log(x);
return 'World'
}
return world;
}
const a = hello();
const b = a()
console.log(b);
или console.log(hello()());

//3.1.Создать функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел
//3.2.с пом созданной функции выведите в консоль сумму значений переменных:
let parm1=1;
let parm2=2;
let psrm3=3;

let param1 = 1
let param2 = 2
let param3 = 3

function sumNum (num1, num2, num3) {
console.log(num1 + num2 + num3);
}
sumNum(param1,param2,param3)


//3.3.дана функция
function func(num=5) {
console.log(num*num);
}
Расскажите, каким будет результат вызова функций
func(2);
func(3);
func();

//4.1. сделайте функцию, которая параметром принимает число, а возвращает квадратный коренб из этого числа.
с помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
function squareRoot (num) {
return Math.sqrt(num)
}
const a = squareRoot(4)
const b = squareRoot(9)
const c = a + b
console.log(c);


//4.2.Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции.
function findMinimum (a, b) {
return Math.min(a, b)
}
console.log(findMinimum(5,2));

const num = 3.145698
const round = num.toFixed(2)
console.log(round);

//5.1.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function getDayOfWeekinRussia (day) {
switch (day) {
case 1:
return 'Понедельник'
break;
case 2:
return 'Вторник'
break;
case 3:
return 'Среда'
break;
case 4:
return 'Четверг'
break;
case 5:
return 'Пятница'
break;
case 6:
return 'Суббота'
break;
case 7:
return 'Воскресенье'
break;
default:
return 'Неверный день'
}
}




//5.2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимсти от времени суток (доброе утро.вечер,день,ночь Иван)

console.log(getDayOfWeekinRussia(10));
function greet (name) {
const now = new Date();
const hour = now.getHours()

if (hour >= 6 && hour < 12) {
return `Доброе утро ${name}`
} else if (hour >= 12 && hour < 18) {
return `Добрый день ${name}`
} else if (hour >= 18 && hour < 22) {
return `Добрый вечер ${name}`
} else {
return `Доброй ночи ${name}`
}
}
console.log(greet('Владимир'));


// через массив
const dayWeek = (day) => {
const week = ['Пнд', 'Вт', 'Ср', 'Чт', 'Птн', 'Суб', 'Вск'];
return week[day - 1]
}
console.log(dayWeek(5));
