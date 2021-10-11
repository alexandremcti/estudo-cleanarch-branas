class Item {
    constructor({ idItem, category, description, price, width = 0, height = 0, length = 0, weight = 0 }) {
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.price = price;
        this.width = width;
        this.height = height
        this.length = length;
        this.weight = weight;
        Object.freeze(this);
    }

    getVolume() {
        return this.width / 100 * this.height / 100 * this.length / 100;
    }

    getDensity() {
        return this.weight / this.getVolume()
    }

    getFreight() {
        const freight = 1000 * this.getVolume() * (this.getDensity() / 100);
        return (freight > 10) ? freight : 10
    }
}

module.exports = Item