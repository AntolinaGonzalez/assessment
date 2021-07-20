const { conversionTool } = require("../components/ConversionTool");

expect = require("chai").expect;
describe("the conversion tool test", () => {
  it("shoul be true", () => {
    expect(conversionTool("1")).to.equal("one");
    expect(conversionTool("18")).to.equal("eighteen");
    expect(conversionTool("7")).to.equal("seven");
    expect(conversionTool("42")).to.equal("forty-two");
    expect(conversionTool("2001")).to.equal("two thousand and one");
    expect(conversionTool("1999")).to.equal("nineteen hundred and ninety-nine");
    expect(conversionTool("17999")).to.equal("seventeen thousand nine hundred and ninety-nine");
    expect(conversionTool("342251")).to.equal("three hundred and forty-two thousand two hundred and fifty-one");
    expect(conversionTool("1900")).to.equal("one thousand nine hundred ");
    expect(conversionTool("541000")).to.equal("five hundred and forty-one thousand ");
    expect(conversionTool("660000")).to.equal("six hundred and sixty thousand ");
    expect(conversionTool("187001")).to.equal("one hundred and eighty-seven thousand and one");
    expect(conversionTool("1300420")).to.equal("one million three hundred  thousand four hundred and twenty");
  });
});
