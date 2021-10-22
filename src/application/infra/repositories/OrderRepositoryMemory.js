const OrderRepository = require("../../../domain/repositories/OrderRepository");

class OrderRepositoryMemory extends OrderRepository {
    constructor() {
        super();
        this._orders = [];
    }

    async save(order) {
        this._orders.push(order);
    }
}

module.exports = OrderRepositoryMemory;