const PlaceOrder = require('../../src/domain/useCases/PlaceOrder');
const ItemRepositoryMemory = require('../../src/application/infra/repositories/ItemRepositoryMemory');
const OrderRepositoryMemory = require('../../src/application/infra/repositories/OrderRepositoryMemory');
const PlaceOrderInput = require('../../src/application/dtos/PlaceOrderInput');

describe('Place Order', () => {
    it('should make a place order', async () => {
        const placeOrderInput = new PlaceOrderInput({
            cpf: '421.989.730-57',
            itens: [
                {
                    idItem: 1,
                    quantity: 1
                },
                {
                    idItem: 2,
                    quantity: 1
                },
                {
                    idItem: 3,
                    quantity: 1
                }
            ]
        })
        const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMemory());
        const { total, code } = await placeOrder.execute(placeOrderInput);
        expect(total).toBe(4600);
        expect(code).toBe("202100000001");
    })
})