const sinon = require("sinon");
const OrderItem = require("../src/entities/OrderItem");

describe('Order Item', () => {
    it('should be able return total of a order item', () => {
        const orderItem = new OrderItem({ idItem: 1, price: 100, quantity: 200 });
        const totalResult = orderItem.getTotal()
        expect(totalResult).toBe(20000);
    })
})
