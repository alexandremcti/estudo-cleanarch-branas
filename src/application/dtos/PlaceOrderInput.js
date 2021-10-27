class PlaceOrderInput {
    constructor({ cpf, itens }) {
        Object.assign(this, { cpf, itens })
        Object.freeze(this);
    }
}

module.exports = PlaceOrderInput