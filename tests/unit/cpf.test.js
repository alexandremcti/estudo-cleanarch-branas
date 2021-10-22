const sinon = require("sinon");
const Cpf = require("../../src/domain/entities/Cpf");

describe('Cpf validator', () => {
    it('shoud be validate a valid cpf', () => {
        const cpf = new Cpf('935.411.347-80');
        expect(cpf).toBeDefined()
    })

    it('shoud be validate a cpf with all digits as zero', () => {
        expect(() => new Cpf('000.000.000-00')).toThrow(new Error('invalid cpf'))
    })

    it('shoud be validate a invalid cpf', () => {
        expect(() => new Cpf('123.456.789-99')).toThrow(new Error('invalid cpf'))
    })

    it('shoud be invalidate a cpf with null value passed', () => {
        expect(() => new Cpf(null)).toThrow(new Error('invalid cpf'))
    })

    it('shoud be invalidate a cpf out of pattern', () => {
        expect(() => new Cpf('qualquer')).toThrow(new Error('invalid cpf'))
    })
})

