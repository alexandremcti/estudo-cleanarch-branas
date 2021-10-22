const PlaceOrder = require('../../src/domain/useCases/PlaceOrder');
const ItemRepositoryMemory = require('../../src/application/infra/repositories/ItemRepositoryMemory');
const OrderRepositoryMemory = require('../../src/application/infra/repositories/OrderRepositoryMemory')

describe('Place Order', () => {
    it('should make a place order', async () => {
        const placeOrderInput = {
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
        }
        const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMemory());
        const total = await placeOrder.execute(placeOrderInput);
    })
})