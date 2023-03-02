function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку
    
    let shippingSum;
    if (productsSum == 0 || productsSum >= freeShippingMinSum)
{shippingSum = 0;
} 
    if ((productsSum > 0) && (productsSum < freeShippingMinSum)) 
{shippingSum = shippingPrice;
}
    // Конец решения задачи №2.1. 

return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

     // Задание №2.2. Рассчитать скидку

    let discountSum;
    if (productsSum >= discountMinSum) {discountSum = productsSum / 100 * discountPart;
} else discountSum = 0;
    
    // Конец решения задачи №2.2.
    
    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине
let totalSum;
totalSum = productsSum;
totalSum = totalSum - discountSum;


    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum;
    let freeShipping;
    freeShipping = !Boolean(shippingSum);
    
    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}