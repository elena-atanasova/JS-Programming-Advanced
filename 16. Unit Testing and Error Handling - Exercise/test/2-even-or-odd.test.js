const isOddOrEven = require('../2-even-or-odd');
const { expect } = require('chai');

describe('Odd or Even', () => {
    it('Should return "undefined" if input is number', () => {
        expect(isOddOrEven(86)).to.equal(undefined);
    });

    it('Should return "undefined" if input is boolean', () => {
        expect(isOddOrEven(true)).to.equal(undefined);
    });

    it('Should return "undefined" if input is object', () => {
        expect(isOddOrEven({ name: 'Elena', age: '21' })).to.equal(undefined);
    });

    it('Should return "even" if the length of the input is an even number', () => {
        expect(isOddOrEven('bottle')).to.equal('even');
    });

    it('Should return "odd" if the length of the input is an odd number', () => {
        expect(isOddOrEven('table')).to.equal('odd');
    });

    it('Should return "odd" if the length of the input is an odd number', () => {
        expect(isOddOrEven('table')).to.equal('odd');
        expect(isOddOrEven('study')).to.equal('odd');
        expect(isOddOrEven('pen')).to.equal('odd');
    });
})