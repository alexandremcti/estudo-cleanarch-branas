class Cpf {

    constructor(value) {
        if (!this.validate(value)) throw new Error('invalid cpf');
        this.value = value;
    }

    get CPF_VALID_LENGTH() {
        return 11
    }

    get FACTOR_FIRST_VERIFIER_DIGIT() {
        return 10
    }

    get FACTOR_SECOND_VERIFIER_DIGIT() {
        return 11
    }

    validate(cpf) {
        if (!cpf) return false
        cpf = this.normalize(cpf);
        if (!this.isCpfPattern(cpf)) return false
        if (this.isBlocked(cpf)) return false
        const firstVerifiedDigit = this.calculateCheckDigit(cpf, this.FACTOR_FIRST_VERIFIER_DIGIT);
        const secondVerifiedDigit = this.calculateCheckDigit(cpf, this.FACTOR_SECOND_VERIFIER_DIGIT);
        const checkDigit = this.extractCheckDigit(cpf);
        const digitCalculated = `${firstVerifiedDigit}${secondVerifiedDigit}`
        return checkDigit == digitCalculated;
    }

    isCpfPattern(cpf) {
        return (cpf.length >= this.CPF_VALID_LENGTH) ? true : false
    }

    normalize(cpf) {
        return cpf.replace(/\D/g, "");
    }

    isBlocked(cpf) {
        const firstDigit = cpf[0];
        return cpf.split("").every(c => c === firstDigit);
    }

    calculateCheckDigit(cpf, factor) {
        let sum = 0;
        for (const digit of cpf) {
            if (factor > 1) sum += parseInt(digit) * factor--;
        }
        let rest = sum % 11
        return (rest < 2) ? 0 : 11 - rest
    }

    extractCheckDigit(cpf) {
        return cpf.slice(9)
    }
}

module.exports = Cpf

