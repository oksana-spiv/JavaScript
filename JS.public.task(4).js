//1.1. Создайте массив с элементами 1,2,3. Выведите на экран каждый из этих элементов.
const myArray = [1, 2, 3];
for (let i = 0; i< myArray.length; i++) {
  console.log(myArray[i]);
}
//1.2. Создайте массив с произвольным количеством элеметов. Выведите на экран количество элементов в массиве.
const myArray =[1, 'two', {}, [],true]
console.log(myArray.length);

//1.3. Создайте массив с элеметами 'a', 'b', 'c'. Запишите вместо первого элемента 1, вместо второго -2, вместо третьего -3.
const myArray =[1, 'two', {}, [],true]
myArray[0]=1;
myArray[1]=2;
myArray[2]=3;
console.log(myArray);


//2.1.  Создайте массив с элементами 1,2,3. с помощью оператора ++ увеличьте каждый элемент на 1.
const myArray = [1, 2, 3];
for (let i = 0; i< myArray.length; i++) {
  myArray[i]++;
}
console.log(myArray);

//2.2. Узнайте длину следующего массива:
const arr = [];
arr [3] = '2';
arr [8] = 'b';
console.log(arr.lehgth); //=9 элеметов. Массив пустой, т.к.значения прсвоены только 4-му и 9-му элемету.
//хотя элементов и 2, длинна массива будет считаться до последего заполенного заченя, т.е.9.
console.log(arr.at(8)); //дает возможность просмотреть , что в элемете

//2.3. Пусть дан такой массив: 
//const arr = [1,2,3];
//Добавьте ему в конце 4, 5.
const arr = [1,2,3];
arr.push(4, 5);
console.log(arr);

//2.4. Создайте произвольный массив из 5 элеметов. Удалите из него 2 элемента. Проверьте, какое станет значение lenth по сле этого.
const arr = [1,2,3, 4, 5];
console.log(arr.splice(1,2)); //удаляем элементы с индексами 1 и2
console.log(arr.pop(3));

//3.1. С помощью цикла for выведите в консоль числа от 11 до 33.
for (let i=11; i<=33; i++) {
  console.log(i);
}

//3.2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i=1; i<=99; i+=2) {
  console.log(i);
}
//3.3. С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i=100; i>=0; i--) {
  console.log(i);
}
//3.4. Дао число num с неким начальным зачением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? посчитайте количество итераций, необходимых для этого.
let num = 1;
let count = 0;
while (num<=1000){
  num*=3;
  count ++;
}
console.log(num);
console.log(count);

//4.1. Дан массив const arr = [2,5,9, 15 ,1, 4].
//Вывдите в консоль те элементы массива, которые больше 3, но меьше 10.
const arr = [2, 5, 9, 15, 1, 4];
for(let i=0; i<arr.length; i++) {
  if (arr[i]>3 && arr[i] <10){
    console.log (arr[i]);
  }
}

const arr = [2, 5, 9, 15, 1, 4];
arr.filter (num-> num>3 && num<10).torEach(num ->console.log(num));
//forEach(element,index,arr)

//4.2. Найдите сумму четных чисел от 2 до 100.
let sum=0;
for (let i=2; i<=100; i+=2) {
  sum+=i
}
console.log(sum);

sonst sum = Array.from({length: 50}, (_,i) ->2+i*2)
//(кол-во подходящих исходов, четных; нижнее подчеркивание - пропуск игнорирование первого элемента)
reduce

//4.3.Дан массив const arr = [2, 5, 9, 3,1, 4].
//Найдите сумму элементов этого массива.

//4.4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'

//4.5. Дан массив с числами. const arr = [2, 5, 9, 0, 3, 1, 4].
//Запустите цикл, который будет по очереди выводить элементы массив а в консоль 
//до тех пор, пока не встретится элемент со значением 0.
//После этого цикл должен завершить свою работу.

//5.1.

//5.2.

//5.3.
