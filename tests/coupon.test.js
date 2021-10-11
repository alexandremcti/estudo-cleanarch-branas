const sinon = require('sinon');
const Coupon = require("../src/entities/Coupon");




describe('Coupon', () => {
    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore()
    })

    it('should verify if a coupon is valid', () => {
        const now = new Date(2021, 9, 10);
        const date = new Date(2021, 12, 2);
        const coupon = new Coupon({ code: "VALE20", discount: 20, expirationDate: date });
        const isCouponValid = coupon.isValid(now);
        expect(isCouponValid).toBeTruthy();
    })

    it('should verify if a coupon is invalid', () => {
        const now = new Date(2021, 9, 10);
        const date = new Date(2021, 8, 2);
        const coupon = new Coupon({ code: "VALE20", discount: 20, expirationDate: date });
        const isCouponInvalid = coupon.isValid(now);
        expect(isCouponInvalid).toBeFalsy();
    })
})
