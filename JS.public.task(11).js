/*
1.1. Дан макет https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140 ,в котором представлены товары на странице корзины
1.2. Необходимо создать файл data.js в котором создать переменную dataProducts в которую присвоить JSON данные по товарам.
1.3. Вам нужно самостоятельно создать JSON данные (не забыть про кавычки для ключей и значений
1.4. Добавить все данные из макета, чтобы в дальнейшим по ним мы смогли создать вёрстку
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
          <img scr="" alt="">
          <div class=product_desc">
            <h2 class="product_name"> </h2>
            <p class="product_price_label"></p>
            <p class="product_color"></p>
            <p class="product_price_label"></p>
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
