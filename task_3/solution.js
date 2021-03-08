function renderCartItem(item) {

    // Задание №3.1. Формирование строки корзины

    // item - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}

    // сформируйте строку itemCountText вида:
    // ${item.count} × ${item.price} ₽ = ${item.price * item.count} ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽</div>

    // сформируйте строку itemHTML вида:
    // <div class="cart-item"><div>${item.title}</div><div>${itemCountText}</div></div>
    // например,
    // <div class="cart-item"><div>Пицца</div><div>5 × 500.00 ₽ = 2500 ₽</div></div>

    // Конец решения задания №3.1.

    return itemHTML;
}


