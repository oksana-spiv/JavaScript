const product = {
  name: 'Стол',
  price: 2000,
  count: 0,
  userRegistred: false,
  reg: function (){
    product.userRegistred = true
  }
  countProduct: function () {
    if (product.count>0) {
      console.log('Вы можете купить данный товар');
    } else {
      console.log ('даный товар ельзя добавить в корзину');
    }
  },
  buyProduct: function () {
    if (product.userRegistred) {
      console.log('Товар в корзине');
    } else {
      console.log('Вам необходимо зарегистрироваться ->product.reg');
    }
  }
}
product.buyProduct();
product.reg();
product.buyProduct();

const productTest = {
  text['hello'], //[]помогают содержимое распознать как текст
  price: 1000}
//for (const key in object){
//  console.log (key + ":" + object[key]);
//}
for (const key in productTest){
  console.log (key + ":" + object[key]);
}


------
//преобразоваие объекта в массив
const object = {
  1:'Ivanov',
  2:'Petrov',
};
const students = object.map((student) => 'student: ${student}');
-----
//увеличваем все элементы, индексируем  
const array = [1, 2, 3, 10, 15];
const arrayUp = array.map(item =>item*2);
console.log (arrayUp);

//кто получает зп больше 10
const array = [1, 2, 3, 10, 15];
const arrayUp = array.filter(item => item<=10);
console.log (arrayUp);//10,15

//есть ли зп 10 и больше
const array = [1, 2, 3, 10, 15];
const arrayUp = array.some(item => item<=10);
console.log (arrayUp);//true

/сложить все зп и найти среднюю
const array = [1, 2, 3, 10, 15];
const arrayUp = array.reduse((a, b) => a+b)/array.length;
console.log (arrayUp);//6.2



//////семинар
//1.1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели.
//Выведите на экран "вторник".
const daysOfWeek = {
  1:'Понедельник',
  2:'Вторник',
  3:'Среда',
  4:'Четверг',
  5:'Пятница',
  6:'Суббота',
  7:'Воскресенье'
}
console.log(daysOfWeek[2]);
 
//1.2. Создайте объект user с ключами 'name','surname', 'age'.
//Выведите на экран фамилию, имя и возраст через дефис.
const user = {
  name: 'Vladimir',
  surname: 'Yakimkov',
  age: 33
}
console.log(user);

//1.3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры.
const user = {
  name: 'Vladimir',
  surname: 'Yakimkov',
  age: 33
}
user.middlName = 'Viktorovich';

//1.4. Удалите свойство surname.
const user = {
  name: 'Vladimir',
  surname: 'Yakimkov',
  age: 33
}
user.middlName = 'Viktorovich';
delete user.surname;
console.log(user);

//2.1. Даны два масиива: первый с названиями дней недели, второй - с их порядковыми номерами:
//С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const obj = {};
for (let i=0; i<arr1.length; i++) {
  obj[arr1[i]] = arr2[i]
}
console.log(obj);

//2.2. переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
const obj = {
  x:1, 
  y:2, 
  z:3
};
for (let key in obj) {
  obj[key] = obj[key]**2
}
console.log(obj);

//3. Найдите сумму элементов приведенного объекта.
const obj = {
  key1: {
    ke1:1,
    key2:2,
    key3:3,
  },
  key2: {
    ke1:4,
    key2:5,
    key3:6,
  },
  key1: {
    ke1:7,
    key2:8,
    key3:9,
  },
}
let sum = 0;
for (const key in obj) {
  for (const innerKey in obj[key]) {
    sum+=obj[key][innerKey]
  }
}
console.log(sum);


//2 cпособ
const values = Object.values(obj)

//более подробно суть
const arr1 = Object.values(values[0])
const arr2 = Object.values(values[1])
const arr3 = Object.values(values[2])
console.log(arr1);
console.log(arr2);
console.log(arr3);
const arr4 = [1, 2, 3, 4, 5, 6]
console.log(arr4.concat(arr1));

//короче
console.log(values);
const res = values.reduce((acc,el) => acc.concat(Object.values(el), [])
console.log(sum);


/////
const values = Object.values(obj)
const arr1 = Object.values(values[0])
const arr2 = Object.values(values[1])
const arr3 = Object.values(values[2])

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// const arr4 = [1,2,3,4,5,6]
// console.log(arr4.concat(arr3));



const res = values.reduce((acc, el) => acc.concat(Object.values(el)), [])
// console.log(res);

//4
//4.1. Создайте объект reddles
//4.2. Добавьте свойства question,answer
//4.3. Создайте метод askQuestion, который спрашивает у пользователя вопрос question и сравнивает ответ с answer
//4.4. если ответил неверно, то в консоль выводится текст: "вы проиграли"
//4.5. *создать 2 подсказки, если пользователь ответил неверно
const riddles {
  question: "Зимой и летом одноим цветом",
   answer: "Ель",
   hints: ["В лесу родилась", "Пришла она нарядная"],
   askQuestion: () => {
     const userAnswer = prompt(this.question);
     if (userAnswer === this.answer) {
       console.log ("Good");
     } else {
       console.log (':('); //смайл
       let hintIndex = 0;
       while(userAnswer !== this.answer && hintIndex < this.hint.length) {
         console.log (this.hints[hintIndex]);
         hintIndex++
         userAnswer = prompt(this.question);
       }
       if (userAnswer === this.answer) {
         console.log ("Good");
       } else {
         console.log ("Вы проиграли");
       }
     }         
     } 
    }
    riddles.askQuestion(); 
  //
const riddles = {
question: "Зимой и летом одним цветом",
answer: "ель",
hints: ["В лесу родилась", "И она нарядная"],
askQuestion() {
let userAnswer = prompt(this.question).trim().toLowerCase();
if (userAnswer === this.answer) {
console.log("Good");
} else {
console.log(':(');
let hintIndex = 0;
while(userAnswer !== this.answer && hintIndex < this.hints.length) {
console.log(this.hints[hintIndex]);
hintIndex++
userAnswer = prompt(this.question).trim().toLowerCase(); //проверка на наличие пробелов
}
if (userAnswer === this.answer) {
console.log("Good");
} else {
console.log('Вы проиграли');
}
}
}
};
