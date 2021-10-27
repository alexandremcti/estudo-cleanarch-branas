class PlaceOrderOutput {
    constructor(total, code) {
        Object.assign(this, { total, code });
        Object.freeze(this);
    }
}

module.exports = PlaceOrderOutput;