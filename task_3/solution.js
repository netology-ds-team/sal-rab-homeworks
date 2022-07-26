function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины
    itemCountText = `${product.count} × ${product.price} ₽ = ${product.count * product.price} ₽`

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
