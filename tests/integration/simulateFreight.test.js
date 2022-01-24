const ItemRepositoryMemory = require('../../src/application/infra/repositories/ItemRepositoryMemory');
const SimulateFreight = require('../../src/domain/useCases/SimulateFreight');

describe('Simulate Freigth', () => {
    it('Should simulate a freigth of a place order', async () => {
        const input = {
            items: [
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
        const totalExpected = 59;
        const itemRepository = new ItemRepositoryMemory();
        const simulateFreight = new SimulateFreight(itemRepository);
        const totalReceived = await simulateFreight.execute(input);
        expect(totalReceived).toEqual(totalExpected);
    })
})