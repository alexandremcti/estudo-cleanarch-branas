const sinon = require("sinon");
const Cpf = require("../src/entities/Cpf");
const Order = require("../src/entities/Order");
const Item = require("../src/entities/Item");
const Coupon = require("../src/entities/Coupon");




describe('Purchase Order', () => {
    it('should not be able to do a oder with a invalid cpf', () => {
        const cpf = '123.456.789-99';
        expect(() => new Order(cpf)).toThrow(new Error('invalid cpf'));
    })

    it('should be able to make a order with three itens', () => {
        const order = new Order('935.411.347-80');

        order.add({ item: new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics' }), quantity: 1 });
        order.add({ item: new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics' }), quantity: 1 });
        order.add({ item: new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics' }), quantity: 1 });

        const total = order.getTotal();
        expect(total).toBe(4600)
    })

    it('should be able to make a order with a discount coupon', () => {
        const order = new Order('935.411.347-80');

        order.add({ item: new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics' }), quantity: 1 });
        order.add({ item: new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics' }), quantity: 1 });
        order.add({ item: new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics' }), quantity: 1 });

        order.setDiscount(new Coupon(50));

        const total = order.getTotal();
        expect(total).toBe(2300)
    })
})
