const Order = require('./../entities/Order');
const PlaceOrderOutputAssembler = require('./../../application/dtos/PlaceOrderOutputAssembler');

class PlaceOrder {

    constructor(itemRepository, orderRepository) {
        this.itemRepository = itemRepository;
        this.orderRepository = orderRepository;
    }

    async execute(placeOrderInput) {
        const { cpf, itens } = placeOrderInput;
        const order = new Order(cpf, new Date(), 1);
        for await (const item of itens) {
            const findItem = await this.itemRepository.findById(item.idItem);
            if (!findItem) throw new Error('item not found');
            order.add({ item: findItem, quantity: item.quantity });
        }
        await this.orderRepository.save(order);
        return PlaceOrderOutputAssembler.assembly(order);
    }
}

module.exports = PlaceOrder