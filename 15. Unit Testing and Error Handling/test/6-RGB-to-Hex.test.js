let rgbToHexColor = require("../6-RGB-to-Hex");
let expect = require("chai").expect;

describe("Return RGB in hexadecimal format", () => {
    // general case
    it("should return #100C0D for (16, 12, 13)", () => {
        expect(rgbToHexColor(16, 12, 13)).to.equal("#100C0D");
    })

    // lowest input
    it("test with lowest possible input (zeros)", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    })

    // highest input
    it("test with highest possible input (255)", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    })

    it("test with invalid input (negative number) for 'red'", () => {
        expect(typeof rgbToHexColor(-16, 12, 13)).to.equal("undefined");
    })

    it("test with invalid input (negative number) for 'green'", () => {
        expect(typeof rgbToHexColor(16, -12, 13)).to.equal("undefined");
    })

    it("test with invalid input (negative number) for 'blue'", () => {
        expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
    })

    it("test with invalid input - out of the range", () => {
        expect(typeof rgbToHexColor(266, 12, 13)).to.equal("undefined");
    })

    it("test with string", () => {
        expect(typeof rgbToHexColor("266", 12, 13)).to.equal("undefined");
    })

    it("test with fractional numbers", () => {
        expect(typeof rgbToHexColor(3.13, 12, 13)).to.equal("undefined");
    })

    it("should pad values with zeros", () => {
        expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    })

    it("no input test", () => {
        expect(rgbToHexColor()).to.be.undefined;
    })
});