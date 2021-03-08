describe('Задание №2.1. Рассчитать доставку', () => {
    it('Тест 2.1.1. Тест переменной shippingSum', () => {
        const funcToThrow = () => calcShipping(0, 0);
        expect(funcToThrow).not.toThrowError(ReferenceError, 'shippingSum is not defined');
    });
    it('Тест 2.1.2. Пустой заказ - доставка должна быть бесплатной', () => {
        const expected = 0;
        const received = calcShipping(0, 700, 200);
        expect(received).toBe(expected);
    });
    it('Тест 2.1.3. Дешевый заказ - доставка должна быть платной', () => {
        const expected = 200;
        const received = calcShipping(500, 700, 200);
        expect(received).toBe(expected);
    });
    it('Тест 2.1.3. Дешевый заказ - доставка должна быть платной', () => {
        const expected = 150;
        const received = calcShipping(1000, 1200, 150);
        expect(received).toBe(expected);
    });
    it('Тест 2.1.4. Дорогой заказ - доставка должна быть бесплатной', () => {
        const expected = 0;
        const received = calcShipping(1000, 700, 500);
        expect(received).toBe(expected);
    });
})

describe('Задание №2.2. Рассчитать скидку', () => {
    it('Тест 2.2.1. Тест переменной discountSum', () => {
        const funcToThrow = () => calcDiscount(0, 10, 0);
        expect(funcToThrow).not.toThrowError(ReferenceError, 'discountSum is not defined');
    });
    it('Тест 2.2.2. Скидка должна применяться', () => {
        const expected = 100;
        const received = calcDiscount(1000, 1000, 10);
        expect(received).toBe(expected);
    });
    it('Тест 2.2.3. Скидка должна применяться', () => {
        const expected = 200;
        const received = calcDiscount(2000, 1000, 10);
        expect(received).toBe(expected);
    });
    it('Тест 2.2.4. Скидка должна применяться', () => {
        const expected = 250;
        const received = calcDiscount(1000, 1000, 25);
        expect(received).toBe(expected);
    });
    it('Тест 2.2.5. Скидка не должна применяться', () => {
        const expected = 0;
        const received = calcDiscount(120, 1000, 10);
        expect(received).toBe(expected);
    });
    it('Тест 2.2.6. Скидка не должна применяться', () => {
        const expected = 0;
        const received = calcDiscount(1999, 2000, 10);
        expect(received).toBe(expected);
    });
})

describe('Задание №2.3. Рассчитать скидки и доставку в корзине', () => {
    it('Тест 2.3.1. Тест переменной totalSum', () => {
        const funcToThrow = () => calcInvoice({
            sum: 0,
            discountMinSum: 0,
            discountPart: 0,
            shippingFreeMinSum: 0,
            shippingPrice: 0
        });
        expect(funcToThrow).not.toThrowError(ReferenceError, 'totalSum is not defined');
    });
    it('Тест 2.3.2. Тест переменной freeShipping', () => {
        const funcToThrow = () => calcInvoice({
            sum: 0,
            discountMinSum: 0,
            discountPart: 0,
            shippingFreeMinSum: 0,
            shippingPrice: 0
        });
        expect(funcToThrow).not.toThrowError(ReferenceError, 'freeShipping is not defined');
    });
    it('Тест 2.3.3. Без скидки, с доставкой ', () => {
        const expected = {
            discount: 0,
            shipping: 300,
            total: 1300,
            freeShipping: false
        };
        const received = calcInvoice({
            sum: 1000,
            discountMinSum: 1200,
            discountPart: 10,
            shippingFreeMinSum: 1200,
            shippingPrice: 300
        });
        expect(received).toEqual(expected);
    });
    it('Тест 2.3.4. Со скидкой, с доставкой ', () => {
        const expected = {
            discount: 100,
            shipping: 100,
            total: 1000,
            freeShipping: false
        };
        const received = calcInvoice({
            sum: 1000,
            discountMinSum: 1000,
            discountPart: 10,
            shippingFreeMinSum: 1000,
            shippingPrice: 100
        });
        expect(received).toEqual(expected);
    });
    it('Тест 2.3.5. Без скидки, без доставки', () => {
        const expected = {
            discount: 0,
            shipping: 0,
            total: 700,
            freeShipping: true
        };
        const received = calcInvoice({
            sum: 700,
            discountMinSum: 800,
            discountPart: 10,
            shippingFreeMinSum: 700,
            shippingPrice: 200
        });
        expect(received).toEqual(expected);
    });
    it('Тест 2.3.6. Со скидкой, без доставки', () => {
        const expected = {
            discount: 100,
            shipping: 0,
            total: 900,
            freeShipping: true
        };
        const received = calcInvoice({
            sum: 1000,
            discountMinSum: 700,
            discountPart: 10,
            shippingFreeMinSum: 700,
            shippingPrice: 200
        });
        expect(received).toEqual(expected);
    });
    it('Тест 2.3.7. Скидка делает доставку платной', () => {
        const expected = {
            discount: 70,
            shipping: 220,
            total: 850,
            freeShipping: false
        };
        const received = calcInvoice({
            sum: 700,
            discountMinSum: 700,
            discountPart: 10,
            shippingFreeMinSum: 700,
            shippingPrice: 220
        });
        expect(received).toEqual(expected);
    });
})
