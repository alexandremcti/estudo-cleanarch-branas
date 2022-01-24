const ItemRepository = require("../../../domain/repositories/ItemRepository");
const Item = require('./../../../domain/entities/Item');

class ItemRepositoryMemory extends ItemRepository {
    constructor() {
        super();
        this.items = [
            new Item({ idItem: 1, description: 'PS5', price: 4000, category: 'eletronics', height: 10, length: 26, weight: 3.9, width: 38 }),
            new Item({ idItem: 2, description: 'Final Fantasy 7 Remake', price: 200, category: 'eletronics', height: 17, length: 13, weight: 0.1, width: 1.5 }),
            new Item({ idItem: 3, description: 'PS5 joystick', price: 400, category: 'eletronics', height: 12, length: 15, weight: 1, width: 1.8 })
        ];
    }

    async findById(id) {
        const findedItem = await this.items.find(item => item.idItem === id);
        return findedItem;
    }
}

module.exports = ItemRepositoryMemory