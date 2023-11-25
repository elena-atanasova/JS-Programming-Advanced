const { describe } = require('mocha');
const lookupChar = require('../3-char-lookup');
const expect = require('chai').expect;

describe('Retrieves a character', () => {
    // first parameter is not a string, index is valid
    it('should receive string as an input', () => {
        expect(lookupChar(54, 2)).to.equal(undefined);
    });

    // first parameter is string, index is not a number
    it('should receive number for the index', () => {
        expect(lookupChar('study', 'one')).to.equal(undefined);
    });

    // first parameter is not a string, index is not a number
    it('should receive number for the index', () => {
        expect(lookupChar(54, 'one')).to.equal(undefined);
    });

    // index is floating number
    it('index should be an integer, not a floating number', () => {
        expect(lookupChar('study', 1.4)).to.equal(undefined);
    });

    // index is < 0
    it('index should be greater than 0', () => {
        expect(lookupChar('study', -2)).to.equal('Incorrect index');
    });

    // index >= string.length
    it('index number is outside of the bounds', () => {
        expect(lookupChar('study', 5)).to.equal('Incorrect index');
    });

    // correctly returns the char
    it('should return the charecter at the given index', () => {
        expect(lookupChar('study', 2)).to.equal('u');
    });
});


// А good first step in testing a method is usually to determine all exit conditions.
// In this case - 3 main exit conditions
// Returning undefined
// Returning an "Incorrect index"
// Returning the char at the specified index