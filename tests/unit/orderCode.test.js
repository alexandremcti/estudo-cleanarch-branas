const OrderCode = require('../../src/domain/entities/OrderCode');

describe('Order Code', () => {
    it('should create a order code', () => {
        const orderCode = new OrderCode({ date: new Date(), sequence: 1 });
        expect(orderCode.code).toBe('202100000001');
    })

    it('should not create a order code', () => {
        expect(() => new OrderCode({ date: new Date(), sequence: "any" })).toThrow('Invalid Parameter');
    })
})