describe('Задание №5.1.  Итоговое задание', () => {
    it('Тест 5.1.1. Формирование верного JSON 1', () => {
        const expected = {
            data: {
                client: 'Иван +7(987)65-43-210',
                order: {
                    address: 'ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв. 53',
                    sum: 900
                },
                goods: [
                    {
                        title: 'Пицца',
                        count: 2
                    }
                ]
            }
        };

        const name = 'Иван';
        const phone = '+7(987)65-43-210';
        const address = {
            street: 'Ленина',
            house: '2',
            entrance: '4',
            floor: '5',
            flat: '53',
        };
        const goods = [
            {
                id: 1,
                title: 'Пицца',
                count: 2,
                price: '500.00'
            }
        ];
        const sum = 900;

        const received = JSON.parse(sendRequest(name, phone, address, goods, sum));
        expect(received).toEqual(expected);
    });
    it('Тест 5.1.2. Формирование верного JSON 2', () => {
        const expected = {
            data: {
                client: 'Василий Иванович +7(987)65-43-210',
                order: {
                    address: 'ул. Академика Королёва, дом 12, 1 подъезд, 15 этаж, кв. 253',
                    sum: 1800
                },
                goods: [
                    {
                        title: 'Пицца',
                        count: 2
                    },
                    {
                        title: 'Хачапури',
                        count: 5
                    }
                ]
            }
        };

        const name = 'Василий Иванович';
        const phone = '+7(987)65-43-210';
        const address = {
            street: 'Академика Королёва',
            house: '12',
            entrance: '1',
            floor: '15',
            flat: '253',
        };
        const goods = [
            {
                id: 1,
                title: 'Пицца',
                count: 2,
                price: '500.00'
            },
            {
                id: 12,
                title: 'Хачапури',
                count: 5,
                price: '200.00'
            },
        ];
        const sum = 1800;

        const received = JSON.parse(sendRequest(name, phone, address, goods, sum));
        expect(received).toEqual(expected);
    });
})
