class OrderCode {
    constructor({ date, sequence }) {
        if (!date || !sequence || !(typeof sequence === "number")) throw new Error('Invalid Parameter');
        this.code = this.generateCode(date, sequence);
        Object.freeze(this);
    }

    generateCode(date, sequence) {
        const year = date.getFullYear();
        const sequence8char = `${sequence}`.padStart(8, "0");
        return `${year}${sequence8char}`
    }
}

module.exports = OrderCode