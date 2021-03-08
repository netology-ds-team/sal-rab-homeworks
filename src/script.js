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

function renderCartItems(items) {
    return items.reduce((acc, item) => acc + renderCartItemWrapper(item), '');
}

function renderCartItemWrapper(item) {
    try {
        return renderCartItem(item);
    } catch {
        return `${item.id}${item.title}${item.count}*${item.price}`;
    }
}

function renderCartDiscount(discount) {
    const cartDiscount = document.createElement('div');
    cartDiscount.className = 'cart-item';
    cartDiscount.innerHTML =`<div><strong>Скидка</strong></div><div><strong>${discount} ₽</strong></div>`;
    return cartDiscount;
}

function renderCartShipping(freeShipping, shipping) {
    const cartShipping = document.createElement('div');
    cartShipping.className = 'cart-item';
    cartShipping.innerHTML = `<div>Доставка</div><div>${(freeShipping) ? 'бесплатно' : shipping} ₽</div>`;
    return cartShipping;
}

function renderCartTotal(total) {
    const cartTotal = document.createElement('div');
    cartTotal.className = 'cart-item';
    cartTotal.innerHTML = `<div><strong>К оплате</strong></div><div><strong>${total} ₽</strong></div>`;
    return cartTotal;
}

function renderCart() {
    const cartDetails = document.querySelector('#cart-detail');
    cartDetails.innerHTML = renderCartItems(cart.items);
    cartDetails.append(document.createElement('hr'));
    cartDetails.append(renderCartDiscount(cart.total.discount));
    cartDetails.append(renderCartShipping(cart.total.freeShipping, cart.total.shipping));
    cartDetails.append(document.createElement('hr'));
    cartDetails.append(renderCartTotal(cart.total.total));
}
