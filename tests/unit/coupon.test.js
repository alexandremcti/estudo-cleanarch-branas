const Coupon = require("../../src/domain/entities/Coupon");

describe('Coupon', () => {
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

    it('should create a coupon without expiration date', () => {
        const now = new Date(2021, 9, 10);
        const coupon = new Coupon({ code: "VALE20", discount: 20 });
        const isCouponInvalid = coupon.isValid(now);
        expect(isCouponInvalid).toBeFalsy();
    })

    it('should verifier if a coupon is valid without a due date especified', () => {
        const now = new Date(2021, 9, 10);
        const date = new Date(2021, 8, 2);
        const coupon = new Coupon({ code: "VALE20", discount: 20 });
        const isCouponInvalid = coupon.isValid();
        expect(isCouponInvalid).toBeFalsy();
    })
})
