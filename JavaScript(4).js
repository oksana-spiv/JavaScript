//Урок 4. Циклы и массивы
//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
/10 – четное число
for (let i = 0; i < 11; i++) {
            if (i === 0) {
                console.log(`${i} - это ноль`);
            } else if (i % 2 === 0) {
                console.log(`${i} - четное число`);
            } else {
                console.log(`${i} - нечетное число`);
            }
        }

//Задание 2
//Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2); 
console.log(arr);

//Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3
//const randomArray = (length, max) => 
//  Array(length).fill().map(() => Math.round(Math.random() * max));

//3.1.
//1способ
const length = 5;
const min = 1;
const max = 9;
const numbers = [...Array(length)]; // создаём массив
for (let i = 0; i < numbers.length; i += 1) { // перебираем элементы
    numbers[i] = Math.random(min, max); // заполняем
  }
console.log(numbers); 

//2 способ
new Array(length ) 
//Array.from({ length: length })
const length = 5;
const min = 1;
const max = 9;
Array[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log(Array); 

//3.2.
....
const min = arr[0];
for (let i=0; i<arr.length; i++) {
  if (arr[i]>arr[0])
   
  else
     const min = arr[i];
}
console.log(min);

//3.3
....
for (let i=0; i<arr.length; i++) {
  if (arr[i]===3)
    console.log($"есть тройка в массиве");
}



*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

const myArray =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
for (let i=0; i<myArray.length; i++) {
  const  a=a+'x'
  console.log(a);
}
