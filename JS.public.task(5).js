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
      console.log('Вам еобходимо зарегистрироваться');
    }
  }
}
product.buyProduct();
