class FreightCalculator {
    static calculate(items) {
        console.log("items", items)
        const DISTANCE = 1000;
        let total = 0;
        items.forEach(item => {
            const freight = DISTANCE * item.getVolume() * (item.getDensity() / 100);
            total += (freight > 10) ? freight : 10
        });
        return total;
    }
}

module.exports = FreightCalculator;