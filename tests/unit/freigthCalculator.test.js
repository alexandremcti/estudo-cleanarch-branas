const Item = require("./../../src/domain/entities/Item");
const FreightCalculator = require("../../src/domain/services/FreightCalculator");

describe("Freigth Calculator", () => {
    it("should calculate a freigth in a item list based", () => {
        const item = new Item({
            idItem: 1,
            description: 'PS5',
            category: 'Eletronics',
            price: 5000,
            width: 38, //0.38
            height: 10,//0.1
            length: 26,//0.26
            weight: 3.9
        });
        const items = [item];
        const totalExpected = 39;
        const currentTotal = FreightCalculator.calculate(items);
        expect(currentTotal).toEqual(totalExpected);
    })
})