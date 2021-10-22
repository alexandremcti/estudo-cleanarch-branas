const Order = require('./../entities/Order');

class PlaceOrder {

    constructor(itemRepository, orderRepository) {
        this.itemRepository = itemRepository;
        this.orderRepository = orderRepository;
    }

    async execute(placeOrderInput) {
        const { cpf, itens } = placeOrderInput;
        const order = new Order(cpf, new Date());
        for await (const item of itens) {
            const findItem = await this.itemRepository.findById(item.idItem);
            if (!findItem) throw new Error('item not found');
            order.add({ item: findItem, quantity: item.quantity });
        }
        await this.orderRepository.save(order);
        const orderItems = order.getOrderItens();
        const total = order.getTotal();
        return total;
    }
}

module.exports = PlaceOrder