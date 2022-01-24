const ItemRepositoryMemory = require("../../application/infra/repositories/ItemRepositoryMemory");
const FreightCalculator = require("../services/FreightCalculator");

class SimulateFreight {
    constructor({ itemRepository = new ItemRepositoryMemory(), freightCalculator = FreightCalculator }) {
        this.itemRepository = itemRepository;
        this.freightCalculator = freightCalculator;
    }

    async execute({ items } = input) {
        const itemsFound = [];
        for await (let item of items) {
            const result = await this.itemRepository.findById(item.idItem);
            itemsFound.push(result);
        };
        const freightTotal = this.freightCalculator.calculate(itemsFound);
        return freightTotal;
    }
}

module.exports = SimulateFreight;