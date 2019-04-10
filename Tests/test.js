const {expect} = require('chai')
const {hey} = require('../libs/hey')

describe("Hey", function () {
    it("says hey", function () {
        expect(hey()).to.equal("Hey, Mother Zambia");
    });

    it("says hey to someone", function () {
        var name="Big-Zude";
        expect(hey(name)).to.equal("Hey, Big-Zude");
    });
});