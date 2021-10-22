class OrderItem {
    constructor({ idItem, price, quantity }) {
        this.idItem = idItem;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.quantity * this.price;
    }
}

module.exports = OrderItem