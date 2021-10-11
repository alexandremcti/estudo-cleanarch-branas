const Cpf = require("./Cpf");
const OrderItem = require("./OrderItem");

class Order {

    constructor(cpf, issueDate = new Date()) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
        this.coupon = undefined;
        this.issueDate = issueDate;
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
        if (!coupon.isValid(this.issueDate)) throw new Error('Coupon expirated')
        this.coupon = coupon;
    }
}

module.exports = Order