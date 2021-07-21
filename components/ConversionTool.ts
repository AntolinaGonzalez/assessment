export const conversionTool = (singleValue: String) => {
  switch (true) {
    case singleValue.length == 1:
      return unit(singleValue);
    case singleValue.length == 2:
      return ten(singleValue as string);
    case singleValue.length == 3:
      return hundred(singleValue as string);
    case singleValue.length == 4:
      const houndredValue = singleValue.slice(0, 2);
      let hundredOutput = ten(houndredValue) + " hundred ";
      let tenValue = "and " + ten(singleValue.slice(2, 4));
      if (houndredValue.charAt(1) == "0") {
        hundredOutput = unit(houndredValue.charAt(0)) + " thousand ";
      }
      if (singleValue.slice(2, 4) == "00") {
        hundredOutput = unit(houndredValue.charAt(0)) + " thousand ";
        tenValue = hundred(singleValue.slice(1, 4));
      }
      return hundredOutput + tenValue;
    case singleValue.length == 5:
      return thousand(singleValue as string);
    case singleValue.length == 6:
      return hundredThousand(singleValue as string);
    case singleValue.length >= 7 && singleValue.length <= 9:
      return millon(singleValue as string);
    case singleValue.length >= 10 && singleValue.length <= 12:
      return billon(singleValue as string);
    case singleValue.length >= 13 && singleValue.length <= 15:
      return trillon(singleValue as string);
    case singleValue.length >= 16 && singleValue.length <= 18:
      return quadrillon(singleValue as string);
    default:
      return "Error";
  }
};
const quadrillon = (quadrillon: string) => {
  let quadrillonValue = "";
  let trillonValue = "";
  switch (quadrillon.length) {
    case 16:
      quadrillonValue = unit(quadrillon.charAt(0)) + " quadrillion ";
      trillonValue = trillon(quadrillon.slice(1, 16));
      break;
    case 17:
      quadrillonValue = ten(quadrillon.slice(0, 2)) + " quadrillion ";
      trillonValue = trillon(quadrillon.slice(2, 17));
      break;
    case 18:
      quadrillonValue = hundred(quadrillon.slice(0, 3))
        ? hundred(quadrillon.slice(0, 3)) + " quadrillion "
        : "";
      trillonValue = billon(quadrillon.slice(3, 18));
      break;
  }
  return quadrillonValue + trillonValue;
};

const trillon = (trillon: string) => {
  let trillonValue = "";
  let billonValue = "";
  switch (trillon.length) {
    case 13:
      trillonValue = unit(trillon.charAt(0)) + " trillion ";
      billonValue = billon(trillon.slice(1, 13));
      break;
    case 14:
      trillonValue = ten(trillon.slice(0, 2)) + " trillion ";
      billonValue = billon(trillon.slice(2, 14));
      break;
    case 15:
      trillonValue = hundred(trillon.slice(0, 3))
        ? hundred(trillon.slice(0, 3)) + " trillion "
        : "";
      billonValue = billon(trillon.slice(3, 15));
      break;
  }
  return trillonValue + billonValue;
};

const billon = (billon: string) => {
  let billonValue = "";
  let millonValue = "";
  switch (billon.length) {
    case 10:
      billonValue = unit(billon.charAt(0)) + " billion ";
      millonValue = millon(billon.slice(1, 10));
      break;
    case 11:
      billonValue = ten(billon.slice(0, 2)) + " billion ";
      millonValue = millon(billon.slice(2, 11));
      break;
    case 12:
      billonValue = hundred(billon.slice(0, 3))
        ? hundred(billon.slice(0, 3)) + " billion "
        : "";
      millonValue = millon(billon.slice(3, 12));
      break;
  }
  return billonValue + millonValue;
};

const millon = (millon: string) => {
  let millonValue = "";
  let thousandValue = "";
  switch (millon.length) {
    case 7:
      millonValue = unit(millon.charAt(0)) + " million ";
      thousandValue = hundredThousand(millon.slice(1, 7));
      break;
    case 8:
      millonValue = ten(millon.slice(0, 2)) + " million ";
      thousandValue = hundredThousand(millon.slice(2, 8));
      break;
    case 9:
      millonValue = hundred(millon.slice(0, 3))
        ? hundred(millon.slice(0, 3)) + " million "
        : "";
      thousandValue = hundredThousand(millon.slice(3, 9));
      break;
  }
  return millonValue + thousandValue;
};

const hundredThousand = (hundredThousand: string) => {
  const thousandValue = hundred(hundredThousand.slice(0, 3)).length
    ? hundred(hundredThousand.slice(0, 3)) + " thousand "
    : hundred(hundredThousand.slice(0, 3));
  let hundredValue = hundred(hundredThousand.slice(3, 6));
  return thousandValue + hundredValue;
};

const thousand = (thousand: string) => {
  const thousandValue = ten(thousand.slice(0, 2));
  let hundredValue = hundred(thousand.slice(2, 5));

  return thousandValue + " thousand " + hundredValue;
};

const hundred = (hundred: string) => {
  let hundredValue =
    unit(hundred.charAt(0)) === "zero"
      ? ""
      : unit(hundred.charAt(0)) + " hundred ";
  let tenValue = ten(hundred.slice(1, hundred.length));
  return hundredValue + (tenValue?.length ? "and " + tenValue : "");
};

const ten = (ten: string) => {
  switch (ten) {
    case "10":
      return "ten";
    case "11":
      return "eleven";
    case "12":
      return "twelve";
    case "15":
      return "fifteen";
    case "13":
      return "thirteen";
    case "18":
      return "eighteen";
    case "20":
      return "twenty";
    case "30":
      return "thirty";
    case "40":
      return "forty";
    case "50":
      return "fifty";
    case "60":
      return "sixty";
    case "70":
      return "seventy";
    case "80":
      return "eighty";
    case "90":
      return "ninety";
    case "00":
      return "";
  }
  switch (ten.charAt(0)) {
    case "1":
      return unit(ten.charAt(1)) + "teen";
    case "2":
      return "twenty-" + unit(ten.charAt(1));
    case "3":
      return "thirty-" + unit(ten.charAt(1));
    case "4":
      return "forty-" + unit(ten.charAt(1));
    case "5":
      return "fifty-" + unit(ten.charAt(1));
    case "6":
      return "sixty-" + unit(ten.charAt(1));
    case "7":
      return "seventy-" + unit(ten.charAt(1));
    case "8":
      return "eighty-" + unit(ten.charAt(1));
    case "9":
      return "ninety-" + unit(ten.charAt(1));
    case "0":
      return unit(ten.charAt(1));
  }
};

const unit = (unit: String) => {
  switch (unit) {
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
    case "0":
      return "zero";
    default:
      return "";
  }
};
