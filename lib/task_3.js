describe('Задание №3.1. Формирование строки корзины', () => {
    it('Тест 3.1.1. Тест переменной itemCountText', () => {
        const funcToThrow = () => renderCartItem({id: 1, title: 'Пицца', count: 5, price: '300.00'});
        expect(funcToThrow).not.toThrowError(ReferenceError, 'itemCountText is not defined');
    });
    it('Тест 3.1.2. Формирование строки 1', () => {
        const expected = '<div class="cart-item"><div>Пицца</div><div>5 × 500.00 ₽ = 2500 ₽</div></div>';
        const received = renderCartItem({title: 'Пицца', count: 5, price: '500.00'});
        expect(received).toBe(expected);
    });
    it('Тест 3.1.3. Формирование строки 2', () => {
        const expected = '<div class="cart-item"><div>Эчпочмак</div><div>2 × 55.00 ₽ = 110 ₽</div></div>';
        const received = renderCartItem({title: 'Эчпочмак', count: 2, price: '55.00'});
        expect(received).toBe(expected);
    });
})
