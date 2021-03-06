const Item = require("../../src/domain/entities/Item");

describe('Item', () => {
    it('should be able create a item', () => {
        const item = new Item({
            idItem: 1,
            description: 'PS5',
            category: 'Eletronics',
            price: 5000
        });
        expect(item.idItem).toBe(1);
    })

    it('should be able calculate a volume', () => {
        const item = new Item({
            idItem: 1,
            description: 'PS5',
            category: 'Eletronics',
            price: 5000,
            width: 38, //0.38
            height: 10,//0.1
            length: 26//0.26
        });
        const volume = item.getVolume();
        expect(volume).toBe(0.00988);
    })

    it('should be able calculate a density', () => {
        const item = new Item({
            idItem: 1,
            description: 'PS5',
            category: 'Eletronics',
            price: 5000,
            width: 38, //0.38
            height: 10,//0.1
            length: 26,//0.26
            weight: 3.9
        });
        const density = item.getDensity();
        expect(density).toBe(394.7368421052632);
    })

})