// Задание 4.1. Вывод карточек товаров

function parseProducts(JSON) {
let data = JSON.parseJSON;
let products = data.products;
return products;  
}

function renderProductsCards(JSON) {
    clearProducts();
    products = parseProducts(JSON); 
    length = products.length;
    for (let i = 0; i < length; i += 1) {
    addProduct(products[i]);
}
}
