function clearProducts() {
    document.querySelector('#products').innerHTML = '';
}

function addProduct({id, title, price, img}) {
    const imgField = document.createElement('img');
    imgField.className = 'card-img';
    imgField.src = img;

    const nameField = document.createElement('h4');
    nameField.className = 'card-title';
    nameField.innerText = title;

    const priceField = document.createElement('p');
    priceField.className = 'card-price';
    priceField.innerText = price + ' ₽';

    const btn = document.createElement('button');
    btn.className = 'button is-primary is-fullwidth add-in-cart';
    btn.innerHTML = 'Заказать';
    btn.setAttribute('data-price', price);
    btn.setAttribute('data-id', id);
    btn.setAttribute('data-title', title);

    const card = document.createElement('div');
    card.className = 'card';
    card.append(imgField);
    card.append(nameField);
    card.append(priceField);
    card.append(btn);

    const product = document.createElement('div');
    product.className = 'is-one-quarter column';
    product.append(card);
    document.querySelector('#products').append(product);

    btn.addEventListener('click', () => addInCartBtn(btn));
}

function renderProductsCards(f) {
    return f;
}

function loadProductsCards() {
    readJsonFile("https://netology-ds-team.github.io/sal-rab-homeworks-sources/products.json",
        (data) => renderProductsCards(data)
    );
}
