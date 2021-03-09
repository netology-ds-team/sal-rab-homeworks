function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}

    // сформируйте строку itemCountText вида:
    // ${product.count} × ${product.price} ₽ = ${product.price * product.count} ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
