//Задание 1
//Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function cubed (num) {
return Math.pow(num)
}
const a = cubed(2);
const b = cubed(3);
const c = a + b;

console.log(c);


//Задание 2
//Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
const salary = (money) => {
  money = money * 0.87;
  return money;
};
const userMoney = Number(prompt(`Укажите размер своей заработной платы`));
if (Number.isNaN(userMoney)===false) {
      alert(`Размер заработной платы за вычетом налогов равен значение ${salary(userMoney)}`)
} else {
      alert(`Значение задано неверно`);
}
//Задание 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
function checkMax(num1, num2, num3) {
      alert(Math.max(num1, num2, num3))
}
const numberA=(prompt(`Укажите первое число`))
const numberB=(prompt(`Укажите второе число`))
const numberC=(prompt(`Укажите третье число`))
checkMax(numberA, numberB, numberC)

//Задание 4
//Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление
//Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
//Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let NumberOne = Number(prompt("Введите первое число"));
let NumberTwo = Number(prompt("Введите второе число"));

const sum = (NumberOne, NumberTwo) => {
  return NumberOne + NumberTwo;
};
console.log(`Сумма чисел равна ${sum(NumberOne, NumberTwo)}`);

const difference = (NumberOne, NumberTwo) => {
  if (NumberOne > NumberTwo || NumberOne === NumberTwo) {
    return NumberOne - NumberTwo;
  } else if (NumberTwo > NumberOne) {
    return NumberTwo - NumberOne;
  }
};
console.log(`Разность чисел равна ${difference(NumberOne, NumberTwo)}`);

const composition = (NumberOne, NumberTwo) => {
  return NumberOne * NumberTwo;
};
console.log(`Произведение чисел равно ${composition(NumberOne, NumberTwo)}`);

const division = (NumberOne, NumberTwo) => {
  return NumberOne / NumberTwo;
};
console.log(`Частное чисел равно ${division(NumberOne, NumberTwo)}`);
