export const conversionTool = (singleValue: String) => {
  let result = "";

  if (singleValue.length == 1) {
    return unit(singleValue);
  }
  if (singleValue.length == 2) {
    return ten(singleValue as string);
  }
  if (singleValue.length == 3) {
    return hundred(singleValue as string);
  }
  if (singleValue.length == 4) {
    const houndredValue = singleValue.slice(0, 2);
    let hundredOutput = ten(houndredValue) + " houndred ";
    if (houndredValue.charAt(1) == "0") {
      hundredOutput = unit(houndredValue.charAt(0)) + " thousand ";
    }
    const tenValue = ten(singleValue.slice(2, 4));
    return hundredOutput + tenValue;
  }
  if (singleValue.length == 5) {
    return thousand(singleValue as string);
  }

  return result;
};
const thousand = (thousand: string) => {
  const thousandValue = ten(thousand.slice(0, 2));
  let hundredValue = hundred(thousand.slice(2, 5));

  return thousandValue + " thousand " + hundredValue;
};

const hundred = (hundred: string) => {
  let hundredValue =
    unit(hundred.charAt(0)) === "Zero"
      ? ""
      : unit(hundred.charAt(0)) + " hundred ";
  let tenValue = ten(hundred.slice(1, hundred.length));
  return hundredValue + (tenValue?.length ? "" + tenValue : "");
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
      return "fourty";
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
      return "fourty-" + unit(ten.charAt(1));
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
      return " and " + unit(ten.charAt(1));
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
