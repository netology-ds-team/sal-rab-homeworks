// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);// Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    return data.products; // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json){// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
    clearProducts(); // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
    let products = parseProducts(json); // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
    length = products.length; // Запишите в переменную length значение свойства products.length
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
    }// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
}
