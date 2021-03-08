describe('Задание №1.1. Оповещение о добавлении в корзину', () => {
    it('Тест 1.1.1. Тест переменной message', () => {
        const funcToThrow = () => addInCartMessage('0', 0);
        expect(funcToThrow).not.toThrowError(ReferenceError, 'message is not defined');
    });
    it('Тест 1.1.2. Тест правильности оповещения', () => {
        const expected = 'Эчпочмак за 70 теперь в корзине!';
        const received = addInCartMessage('Эчпочмак', 70);
        expect(received).toBe(expected)
    });
    it('Тест 1.1.3. Тест вариативности оповещения', () => {
        const expected = 'Суши за 120 теперь в корзине!';
        const received = addInCartMessage('Суши', 120);
        expect(received).toBe(expected);
    });
})

describe('Задание №1.2. Увеличение числа в корзине', () => {
    it('Тест 1.2.1. Тест переменной newValue', () => {
        const funcToThrow = () => addInCartCountChange('0', 0);
        expect(funcToThrow).not.toThrowError(ReferenceError, 'newValue is not defined');
    });
    it('Тест 1.2.2. Добавление одного', () => {
        const expected = 2;
        const received = addInCartCountChange(1);
        expect(received).toBe(expected);
    });
    it('Тест 1.2.3. Добавление к нулю', () => {
        const expected = 1;
        const received = addInCartCountChange(0);
        expect(received).toBe(expected)
    });
    it('Тест 1.2.4. Тест вариативности', () => {
        const expected = 200;
        const received = addInCartCountChange(199);
        expect(received).toBe(expected)
    });
})

describe('Задание №1.3. Увеличение суммы в корзине', () => {
    it('Тест 1.3.1. Тест переменной newSum', () => {
        const funcToThrow = () => addInCartSumChange('0', 0);
        expect(funcToThrow).not.toThrowError(ReferenceError, 'newSum is not defined');
        expect(funcToThrow).not.toThrowError(ReferenceError, 'newSumText is not defined');
    });
    it('Тест 1.3.2. Тест переменной newSumText', () => {
        const funcToThrow = () => addInCartSumChange('0', 0);
        expect(funcToThrow).not.toThrowError(ReferenceError, 'newSumText is not defined');
    });
    it('Тест 1.3.3. Базовая проверка', () => {
        const expected = '1000 ₽';
        const received = addInCartSumChange(500, 500);
        expect(received).toBe(expected);
    });
    it('Тест 1.3.4. Добавление к нулю', () => {
        const expected = '120 ₽';
        const received = addInCartSumChange(0, 120);
        expect(received).toBe(expected)
    });
    it('Тест 1.3.5. Тест вариативности', () => {
        const expected = '200 ₽';
        const received = addInCartSumChange(200, 0);
        expect(received).toBe(expected)
    });
})
