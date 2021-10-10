class Coupon {
    constructor({ code, discount, expirationDate }) {
        this.code = code;
        this.discount = discount;
        this.expirationDate = expirationDate;
        Object.freeze(this);
    }

    isValid() {
        const todayDate = new Date();
        return (this.expirationDate > todayDate) ? true : false
    }

}

module.exports = Coupon