function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    // создайте переменную message
    let message;
    // присвойте переменной message значение переменной productName
    message = productName;
    // добавьте в конец переменной message пробел
    message = message + " ";
    // добавьте в конец переменной message текст 'за'
    message = message + "за";
    // добавьте в конец переменной message пробел
     message = message + " ";
    // добавьте в конец переменной message значение переменной productPrice
    message = message + productPrice;
    // добавьте в конец переменной message пробел
    message = message + " ";
    // добавьте в конец переменной message текст 'теперь в корзине!'
    message = message + "теперь в корзине!";
    // выведите переменную message в консоль
    console.log(message);
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {
    //исправление некорректных комментариев задания
    let oldValue = value;
    // Задание №1.2. Увеличение количества в корзине

    // создайте переменную newValue
    let newValue;
    // присвойте ей значение oldValue
    newValue = oldValue;
    // увеличьте значение newValue на 1
    newValue += 1;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    let newSum = oldSum + difference;
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    let newSumText = newSum + ' ₽';
    // замените склеивание, используемое в newSum Text на шаблонную строку
     newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

