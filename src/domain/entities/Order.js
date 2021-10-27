const Cpf = require("./Cpf");
const OrderCode = require("./OrderCode");
const OrderItem = require("./OrderItem");

class Order {

    constructor(cpf, issueDate = new Date(), sequence = 1) {
        this._cpf = new Cpf(cpf);
        this._orderItems = [];
        this._issueDate = issueDate;
        this._orderCode = new OrderCode({ date: issueDate, sequence: sequence });
    }


    add({ item, quantity }) {
        const { idItem, price } = item;
        this._orderItems.push(new OrderItem({ idItem: idItem, price: price, quantity: quantity }))
    }

    getTotal() {
        let total = 0;
        for (const orderItem of this._orderItems) {
            total += orderItem.getTotal()
        }
        if (this._coupon) {
            total -= (total * this._coupon.discount) / 100;
        }
        return total
    }

    setDiscount(coupon) {
        if (!coupon.isValid(this._issueDate)) throw new Error('Coupon expirated')
        this._coupon = coupon;
    }

    getCoupon() {
        return this._coupon;
    }

    getCpf() {
        return this._cpf;
    }

    getOrderItens() {
        return this._orderItems.slice();
    }

    getOrderCode() {
        return this._orderCode.code;
    }
}

module.exports = Order