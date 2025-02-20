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
    expect(conversionTool("17999")).to.equal(
      "seventeen thousand nine hundred and ninety-nine"
    );
    expect(conversionTool("342251")).to.equal(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
    expect(conversionTool("1900")).to.equal("one thousand nine hundred ");
    expect(conversionTool("541000")).to.equal(
      "five hundred and forty-one thousand "
    );
    expect(conversionTool("660000")).to.equal(
      "six hundred and sixty thousand "
    );
    expect(conversionTool("187001")).to.equal(
      "one hundred and eighty-seven thousand and one"
    );
    expect(conversionTool("1300420")).to.equal(
      "one million three hundred  thousand four hundred and twenty"
    );
    expect(conversionTool("3500000")).to.equal(
      "three million five hundred  thousand "
    );
    expect(conversionTool("10000000")).to.equal("ten million ");
    expect(conversionTool("300000000")).to.equal("three hundred  million ");
    expect(conversionTool("300000001")).to.equal(
      "three hundred  million and one"
    );
    expect(conversionTool("350000001")).to.equal(
      "three hundred and fifty million and one"
    );
    expect(conversionTool("355450001")).to.equal(
      "three hundred and fifty-five million four hundred and fifty thousand and one"
    );
    expect(conversionTool("1000000000")).to.equal("one billion ");
    expect(conversionTool("1000000001")).to.equal("one billion and one");
    expect(conversionTool("15000450000")).to.equal(
      "fifteen billion four hundred and fifty thousand "
    );
    expect(conversionTool("15555000001")).to.equal(
      "fifteen billion five hundred and fifty-five million and one"
    );
    expect(conversionTool("188000000000")).to.equal(
      "one hundred and eighty-eight billion "
    );
    expect(conversionTool("177000555221")).to.equal(
      "one hundred and seventy-seven billion five hundred and fifty-five thousand two hundred and twenty-one"
    );
    expect(conversionTool("10000000000")).to.equal("ten billion ");
    expect(conversionTool("1000000000000")).to.equal("one trillion ");
    expect(conversionTool("1000000000001")).to.equal("one trillion and one");
    expect(conversionTool("1500100000001")).to.equal(
      "one trillion five hundred  billion one hundred  million and one"
    );
    expect(conversionTool("1000250115005")).to.equal(
      "one trillion two hundred and fifty million one hundred and fifteen thousand and five"
    );
    expect(conversionTool("45000000000000")).to.equal("forty-five trillion ");
    expect(conversionTool("45000000000015")).to.equal(
      "forty-five trillion and fifteen"
    );
    expect(conversionTool("45157888500200")).to.equal(
      "forty-five trillion one hundred and fifty-seven billion eight hundred and eighty-eight million five hundred  thousand two hundred "
    );
    expect(conversionTool("500222")).to.equal(
      "five hundred  thousand two hundred and twenty-two"
    );
    expect(conversionTool("450000000850005")).to.equal(
      "four hundred and fifty trillion eight hundred and fifty thousand and five"
    );
    expect(conversionTool("1000000000000000")).to.equal("one quadrillion ");
    expect(conversionTool("1000000000000005")).to.equal(
      "one quadrillion and five"
    );
  });
});
