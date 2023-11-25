const { describe } = require('mocha');
const mathEnforcer = require('../4-math-enforcer');
const expect = require('chai').expect;


// we can also test for 0, obj, empty, etc.?
describe('mathEnforcer', () => {
    describe('addFive', () => {
        // non-number
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        })

        // positive number
        it('should return correct result with a positive number parameter', () => {
            expect(mathEnforcer.addFive(6)).to.equal(11);
        })

        // negative number
        it('should return correct result with a negative number parameter', () => {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        })

        // floating-point number
        it('should return correct result with a floating-point number parameter', () => {
            expect(mathEnforcer.addFive(1.4)).to.be.closeTo(6.4, 0.01);
        })
    });

    describe('subtractTen', () => {
        // non-number
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.subtractTen('seven')).to.equal(undefined);
        })

        // positive number
        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(7)).to.equal(-3);
        })

        // negative number
        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
        })

        // floating-point number
        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(-2.3)).to.be.closeTo(-12.3, 0.01);
        })
    });

    describe('sum', () => {
        // first param is non-number
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum('1', 5)).to.equal(undefined);
        })

        // second param is non-number
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum(1, '5')).to.equal(undefined);
        })

        // both param are non-number
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum('1', '5')).to.equal(undefined);
        })

        // both params are valid integer numbers
        it('should return correct result with integer number parameters', () => {
            expect(mathEnforcer.sum(1, 5)).to.equal(6);
        })

        // first param is a floating-point number
        it('should return correct result with a floating-point number parameter', () => {
            expect(mathEnforcer.sum(1.16, 5)).to.be.closeTo(6.16, 0.01);
        })

        // second param is a floating-point number
        it('should return correct result with a floating-point number parameter', () => {
            expect(mathEnforcer.sum(1, 5.5)).to.be.closeTo(6.5, 0.01);
        })

        // both params are floating-point numbers
        it('should return correct result with floating-point number parameters', () => {
            expect(mathEnforcer.sum(1.14, 5.5)).to.be.closeTo(6.64, 0.01);
        })
    });
})
