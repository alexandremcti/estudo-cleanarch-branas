const Cpf = require("./Cpf");
const OrderItem = require("./OrderItem");

class Order {

    constructor(cpf) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
        this.coupon = undefined;
    }

    add({ item, quantity }) {
        const { idItem, price } = item;
        this.orderItems.push(new OrderItem({ idItem: idItem, price: price, quantity: quantity }))
    }

    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal()
        }
        if (this.coupon) {
            total -= (total * this.coupon.discount) / 100;
        }
        return total
    }

    setDiscount(coupon) {
        this.coupon = coupon;
    }
}

module.exports = Order