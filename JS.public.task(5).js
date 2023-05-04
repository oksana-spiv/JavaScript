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
