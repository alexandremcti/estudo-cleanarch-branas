const PlaceOrderOutput = require("./PlaceOrderOutput");

class PlaceOrderOutputAssembler {
    static assembly(order) {
        const total = order.getTotal();
        const code = order.getOrderCode();
        return new PlaceOrderOutput(total, code);
    }
}

module.exports = PlaceOrderOutputAssembler;