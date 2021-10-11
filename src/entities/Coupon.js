class Coupon {
    constructor({ code, discount, expirationDate }) {
        this.code = code;
        this.discount = discount;
        this.expirationDate = expirationDate;
        Object.freeze(this);
    }

    isValid(today = new Date()) {
        if (!this.expirationDate) return false
        return (this.expirationDate > today)
    }

}

module.exports = Coupon