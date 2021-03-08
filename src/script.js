const cart = new Cart();

window.addEventListener('load', () => {
    bindModals();
    bindNotifications();
    loadProductsCards();
    bindCart();
});

function bindCart() {
    cart.shippingSettings = {minForFree: 700, price: 200};
    cart.discountSettings = {minSum: 700, part: 10};
    document.querySelectorAll('.add-in-cart').forEach((btn) => {
        btn.addEventListener('click', () => addInCartBtn(btn));
    })
    document.querySelector('#cart-items-count').innerHTML = '0';
}

function addInCartBtn(btn) {
    cart.addProduct(new Product(btn.dataset.id, btn.dataset.title, btn.dataset.price));
    addInCartNotification(btn.dataset.title, btn.dataset.price);
    changeCartValues(btn.dataset.price);
    renderCart();
}

function addInCartNotification(title, price) {
    try {
        createNotification(addInCartMessage(title, price));
    } catch (e) {
        createNotification('error', false, 'danger');
    }
}

function changeCartValues(price) {
    const cartCountField = document.querySelector('#cart-items-count');
    const cartSumField = document.querySelector('#cart-items-sum');

    try {
        cartCountField.innerHTML = addInCartCountChange(+cartCountField.innerHTML);
    } catch {
        cartCountField.innerHTML = '0';
    }

    try {
        cartSumField.innerHTML = addInCartSumChange(+/\d+/.exec(cartSumField.innerHTML), +price);
    } catch {
        cartSumField.innerHTML = '0 ₽'
    }
}

function renderCartItem({count, price, title}) {
    const cartItem = document.createElement('div');
    const cartItemTitle = document.createElement('div');
    const cartItemSum = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItemTitle.innerHTML = `${title}`;
    cartItemSum.innerHTML = `${count} × ${price} ₽ = ${price * count} ₽`;
    cartItem.append(cartItemTitle);
    cartItem.append(cartItemSum);
    return cartItem;
}

function renderCartDiscount(discount) {
    const cartDiscount = document.createElement('div');
    const cartDiscountTitle = document.createElement('div');
    const cartDiscountSum = document.createElement('div');
    cartDiscount.className = 'cart-item';

    cartDiscountTitle.innerHTML = 'Скидка';
    cartDiscountSum.innerHTML = `${discount} ₽`;

    cartDiscount.append(cartDiscountTitle);
    cartDiscount.append(cartDiscountSum);
    return cartDiscount;
}

function renderCartShipping(freeShipping, shipping) {
    const cartShipping = document.createElement('div');
    const cartShippingTitle = document.createElement('div');
    const cartShippingSum = document.createElement('div');
    cartShipping.className = 'cart-item';

    cartShippingTitle.innerHTML = 'Доставка';
    cartShippingSum.innerHTML = (freeShipping) ? 'бесплатно' : `${shipping} ₽`;

    cartShipping.append(cartShippingTitle);
    cartShipping.append(cartShippingSum);
    return cartShipping;
}

function renderCartTotal(total) {
    const cartTotal = document.createElement('div');
    const cartTotalTitle = document.createElement('div');
    const cartTotalSum = document.createElement('div');
    cartTotal.className = 'cart-item';

    cartTotalTitle.innerHTML = '<strong>К оплате<\strong>';
    cartTotalSum.innerHTML = `<strong>${total} ₽<\strong>`;

    cartTotal.append(cartTotalTitle);
    cartTotal.append(cartTotalSum);
    return cartTotal;
}

function renderCart() {
    const cartDetails = document.querySelector('#cart-detail');
    cartDetails.innerHTML = '';

    cart.items.forEach((item) => cartDetails.append(renderCartItem(item)));
    cartDetails.append(document.createElement('hr'));
    cartDetails.append(renderCartDiscount(cart.total.discount));
    cartDetails.append(renderCartShipping(cart.total.freeShipping, cart.total.shipping));
    cartDetails.append(document.createElement('hr'));
    cartDetails.append(renderCartTotal(cart.total.total));
}
