const Cpf = require("../../src/domain/entities/Cpf");
const Order = require("../../src/domain/entities/Order");
const Item = require("../../src/domain/entities/Item");
const Coupon = require("../../src/domain/entities/Coupon");




describe('Purchase Order', () => {
    it('should not be able to do a oder with a invalid cpf', () => {
        const cpf = '123.456.789-99';
        expect(() => new Order(cpf)).toThrow(new Error('invalid cpf'));
    })

    it('should be able to make a order with three itens', () => {
        const order = new Order('935.411.347-80');
        order.add({
            item: new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics' }),
            quantity: 1
        });
        order.add({
            item: new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics' }),
            quantity: 1
        });
        order.add({
            item: new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics' }),
            quantity: 1
        });
        const total = order.getTotal();
        expect(total).toBe(4600)
    })

    it('should be able apply a discount coupon in a order', () => {
        const order = new Order('935.411.347-80', new Date(2021, 9, 10));
        order.add({
            item: new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics' }),
            quantity: 1
        });
        order.add({
            item: new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics' }),
            quantity: 1
        });
        order.add({
            item: new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics' }),
            quantity: 1
        });
        order.setDiscount(new Coupon({ code: "VALE20", discount: 50, expirationDate: new Date(2021, 9, 11) }));
        const total = order.getTotal();
        expect(total).toBe(2300)
    })

    it('should not apply a discount coupon expirated', () => {
        const order = new Order('935.411.347-80', new Date(2021, 10, 10));
        order.add({
            item: new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics' }),
            quantity: 1
        });
        order.add({
            item: new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics' }),
            quantity: 1
        });
        order.add({
            item: new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics' }),
            quantity: 1
        });
        expect(
            () => order.setDiscount(new Coupon({
                code: "VALE50",
                discount: 50,
                expirationDate: new Date(2021, 7, 2)
            }))).toThrowError('Coupon expirated')
    })

    it('should return orderItens', () => {
        const order = new Order('421.989.730-57', new Date());
        const item1 = new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics' });
        const item2 = new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics' });
        const item3 = new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics' });
        order.add({
            item: item1,
            quantity: 1
        });
        order.add({
            item: item2,
            quantity: 1
        });
        order.add({
            item: item3,
            quantity: 1
        });
        const orderItens = order.getOrderItens();
        expect(orderItens).toHaveLength(3);
    })
})
