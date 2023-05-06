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

//Владимир, спасибо за подробный разбор прошлого задания! почему-то не могу отправить Вам личное сообщение или ответ на прошлое дз.попробовала исправить ошибки, но с функцией подбора радомных значений никак не разберусь. пробовала разые варианты, подставляла значения или оставляла в переменных - все равно теперь эта программка не работает. ошибок нет, но ничего не выводит. что не так?
new Array(length ) 
//Array.from({ length: length })
const length = 5;
const min = 1;
const max = 9;
Array[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log(Array); 
