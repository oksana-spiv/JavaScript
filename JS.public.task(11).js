/*
1.1. Дан макет https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140 ,в котором представлены товары на странице корзины
1.2. Необходимо создать файл data.js в котором создать переменную dataProducts в которую присвоить JSON данные по товарам.
1.3. Вам нужно самостоятельно создать JSON данные (не забыть про кавычки для ключей и значений
1.4. Добавить все данные из макета, чтобы в дальнейшим по ним мы смогли создать вёрстку
*/
/*
2.1. Создаём вёрстку по данному макету
2.2. Добавляем все теги и стили для них, чтобы получилось один в один как в макете
2.3. Пока данные для шаблонизации использовать не нужно
*/
/*
3.1.Создаём блоки с помощью javascript для этого используем данные из dataProducts
3.2. Формируем товары на основе нашей вёрстки
3.3. Проверяем, как будет выглядеть сайт, если в json данных, добавить еще один объект с товаром (в вёрстке должен появиться еще один блок, на основе этих данных)
*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="product__box">
      <div class="product">
        <button class="btn_del" type="buttton">удалить</button>
        <div class="product_content">
          <img class="product_img" scr="" alt="">
          <div class=product_desc">
            <h2 class="product_name"> </h2>
            <p class="product_price_label">Price: <span class="product_price">$</span></p>
            <p class="product_color">Color:</p>
            <p class="product_size">Size:</p>
            <div class="product_qty"
                <label class="input_label">Quantity:</label>
                <input class=input_quantity" type="text" value="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="module" src="index.js"></script>
</body>
</html>


// data.json:

[
    {
        "name": "MANGO  PEOPLE  T-SHIRT",
        "image": "img/product1.jpg",
        "price": 52,
        "color": "Black",
        "size": "XL",
        "quantity": 2
    },
    {
        "name": "ABIBAS",
        "image": "img/product2.jpg",
        "price": 5200,
        "color": "Black",
        "size": "XXXXL",
        "quantity": 20
    }

]


// stye.css:
* {
    margin: 0;
    padding: 0;
}

.product__box {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap; /*чтоб не переходило на новую строку*/
    align-items: center;
    gap: 40px;
}

.product {
    position: relative;
}

.btn__del {
    position: absolute;
    top: 28px;
    right: 22px;
    width: 18px;
    height: 18px;
    font-size: 0; /*чтоб удалить*/
    border: none;
    background: none;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(img/cross.svg);
    cursor: pointer; /*указатель-палец*/
}

.product__img {
    width: 262px;
}

.product__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #575757
}

.product__name {
    margin-bottom: 42px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
}

.product__price{
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #EF5B70;

}

.input__quantity {
    width: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #656565;
    text-align: center;
    border: 1px solid #EAEAEA
}

.product__qty {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 24px;

}

.product__desc {
    padding: 22px 100px 62px 30px;
}

.product__content {
    display: flex;
    width: 650px;
    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
}


// index.js:

(async () => {
  try {
    const responce = await fetch('data.json');

    if (!responce.ok) {
      throw new Error('Faild from data.json');
    }
  
  const data = await responce.json();

  const productBox = document.querySelector('.product__box');

  data.forEach(({ name, image, price, color, size, quantity}) => {
    const productEl = `
    <div class="product">
            <button class="btn__del" type="button">удалить</button>
            <div class="product__content">
                <img class="product__img" src="${image}" alt="${name}">
                <div class="product__desc">
                    <h2 class="product__name">${name}</h2>
                    <p class="product__price_label">Price: <span class="product__price">$${price}</span></p>
                    <p class="product__color">Color:${color}</p>
                    <p class="product__size">Size: ${size}</p>
                    <div class="product__qty">
                        <label class="input__label">Quantity:</label>
                        <input class="input__quantity" type="text" value="${quantity}">
                    </div>
                </div>
            </div>
        </div>
    `
    productBox.insertAdjacentHTML('beforeend', productEl)
  });
const deleteButtons = document.querySelectorAll('.btn__del');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    product.remove();
  })
})

  } catch (error) {
    console.error(error);
  }
}).apply();

// import { dataProducts } from "./data.js";
// const productData = JSON.parse(dataProducts)

//   const productBox = document.querySelector('.product__box');

//  productData.forEach(({ name, image, price, color, size, quantity}) => {
//     const productEl = `
//     <div class="product">
//             <button class="btn__del" type="button">удалить</button>
//             <div class="product__content">
//                 <img class="product__img" src="${image}" alt="${name}">
//                 <div class="product__desc">
//                     <h2 class="product__name">${name}</h2>
//                     <p class="product__price_label">Price: <span class="product__price">$${price}</span></p>
//                     <p class="product__color">Color:${color}</p>
//                     <p class="product__size">Size: ${size}</p>
//                     <div class="product__qty">
//                         <label class="input__label">Quantity:</label>
//                         <input class="input__quantity" type="text" value="${quantity}">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//     productBox.insertAdjacentHTML('beforeend', productEl)
//   });
// const deleteButtons = document.querySelectorAll('.btn__del');
// deleteButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const product = button.closest('.product');
//     product.remove();
//   })
// })

