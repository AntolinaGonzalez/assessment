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
    return hundredOutput  + tenValue;
  }

  return result;
};
const thousand = (thousand: string) => {
  const thousandValue = thousand.charAt(0);
  const hundredValue = hundred(thousand.slice(1, thousand.length));
  return unit(thousandValue) + " thousand and " + hundredValue;
};

const hundred = (hundred: string) => {
  const hundredValue = hundred.charAt(0);
  const tenInput = hundred.slice(1, hundred.length);
  let tenValue = ten(tenInput as string);
  return unit(hundredValue) + " hundred and " + tenValue;
};

const ten = (ten: string) => {
  switch (ten) {
    case "10":
      return "Ten";
    case "11":
      return "Eleven";
    case "12":
      return "Twelve";
    case "15":
      return "Fifteen";
    case "13":
      return "Thirteen";
    case "18":
      return "Eightteen";
    case "20":
      return "Twenty";
    case "30":
      return "Thirty";
    case "40":
      return "Fourty";
    case "50":
      return "Fifty";
    case "60":
      return "Sixty";
    case "70":
      return "Seventy";
    case "80":
      return "Eighty";
    case "90":
      return "Ninety";
    case "00":
      return "";
  }
  switch (ten.charAt(0)) {
    case "1":
      return unit(ten.charAt(1)) + "teen";
    case "2":
      return "Twenty-" + unit(ten.charAt(1));
    case "3":
      return "Thirty-" + unit(ten.charAt(1));
    case "4":
      return "Fourty-" + unit(ten.charAt(1));
    case "5":
      return "Fifty-" + unit(ten.charAt(1));
    case "6":
      return "Sixty-" + unit(ten.charAt(1));
    case "7":
      return "Seventy-" + unit(ten.charAt(1));
    case "8":
      return "Eighty-" + unit(ten.charAt(1));
    case "9":
      return "Ninety-" + unit(ten.charAt(1));
    case "0":
      return " and " + unit(ten.charAt(1));
  }
};

const unit = (unit: String) => {
  switch (unit) {
    case "1":
      return "One";
    case "2":
      return "Two";
    case "3":
      return "Three";
    case "4":
      return "Four";
    case "5":
      return "Five";
    case "6":
      return "Six";
    case "7":
      return "Seven";
    case "8":
      return "Eight";
    case "9":
      return "Nine";
    default:
      return "";
  }
};
