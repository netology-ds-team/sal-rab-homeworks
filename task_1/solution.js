// Задание №1.1. Оповещение о добавлении в корзину
function addInCartMessage(title, price) {
let productName = title;
let productPrice = price;
let message;
message = productName;
message = message + " ";
message = message + “за”;
message = message + productPrice;
message = message + " ";
message = message + “теперь в корзине!”;
console.log(message);
return message;
}
// Конец решения задания №1.1. 
// Задание №1.2. Увеличение количества в корзине
function addInCartCountChange(value) {
let oldValue = value;
let newValue;
newValue += 1;
console.log(newValue);
return newValue;
}
// Конец решения задания №1.2. 
// Задание №1.3. Увеличение суммы в корзине
function addInCartSumChange(sum, delta) {
let oldSum = sum;
let difference = delta;
let newSum = oldSum + difference;
let newSumText = newSum + ₽;
newSumText = ${newSum} ₽;
console.log(newSum);
return newSumText;
}
// Конец решения задания №1.3.
