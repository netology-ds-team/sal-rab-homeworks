function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    // создайте переменную message
    // присвойте переменной message значение переменной productName
    let message = productName
    // добавьте в конец переменной message пробел
    message += " ";
    // добавьте в конец переменной message текст 'за'
     message = message + "за";
    // добавьте в конец переменной message пробел
    message += " ";
    // добавьте в конец переменной message значение переменной productPrice
    message = message + productPrice;
    // добавьте в конец переменной message пробел
    message += " ";
    // добавьте в конец переменной message текст 'теперь в корзине!'
    message = message + "теперь в корзине!";
    // выведите переменную message в консоль
consolе.log(message);
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    // создайте переменную newValue
    let newValue;
    // присвойте ей значение oldValue
    let newValue= oldValue;
    // увеличьте значение newValue на 1
newValue += newValue + 1
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
    let newSumText = newSum + " ₽"
    // замените склеивание, используемое в newSum Text на шаблонную строку
    newSumText = `${newSum} ₽`;
    // Конец решения задания №1.3.

    return newSumText;
}

