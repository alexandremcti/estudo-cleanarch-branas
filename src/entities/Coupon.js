class Coupon {
    constructor(discount) {
        this.discount = discount;
        Object.freeze(this);
    }

}

module.exports = Coupon