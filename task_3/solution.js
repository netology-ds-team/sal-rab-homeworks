function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    //const id - идентификатор
    //const title - наименование
    // price - цена
    // count - количество
    // product = {id: id, title: title, count: count, price: price};
    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    itemCountText == 5 * 500.00`₽`== 2500 `₽`;
    // 1. Создайте переменную itemCountText, равную пустой строке
    let itemCountText = ``;
    // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    itemCountText += product.count;
    // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    itemCountText += ` x `;
    // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    itemCountText += product.price;
    // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    itemCountText += `₽ = `;
    // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    let sum = product.count * product.price;
    // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    itemCountText = itemCountText + sum;
    // 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`
    itemCountText += ` ₽`;
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
