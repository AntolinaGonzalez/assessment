export const conversionTool = (singleValue: String) => {
  let result = "";
  if (singleValue == "10") {
    return "Ten";
  }
  if (singleValue == "11") {
    return "Eleven";
  }
  if (singleValue == "12") {
    return "Twelve";
  }
  if (singleValue == "15") {
    return "Fifteen";
  }
  if (singleValue == "13") {
    return "Thirteen";
  }
  if (singleValue == "18") {
    return "Eightteen";
  }
  if (singleValue == "20") {
    return "Twenty";
  }
  if (singleValue == "30") {
    return "Thirty";
  }
  if (singleValue == "40") {
    return "Fourty";
  }
  if (singleValue == "50") {
    return "Fifty";
  }
  if (singleValue == "60") {
    return "Sixty";
  }
  if (singleValue == "70") {
    return "Seventy";
  }
  if (singleValue == "80") {
    return "Eighty";
  }
  if (singleValue == "90") {
    return "Ninety";
  }

  if (singleValue.length == 1) {
    return unit(singleValue);
  }
  if (singleValue.length == 2) {
    if (singleValue.charAt(0) == "1") {
      const ten = singleValue.charAt(1);
      return unit(ten) + "teen";
    }
    if (singleValue.charAt(0) == "2") {
      const ten = singleValue.charAt(1);
      return "Twenty-" + unit(ten);
    }
    if (singleValue.charAt(0) == "3") {
      const ten = singleValue.charAt(1);
      return "Thirty-" + unit(ten);
    }
    if (singleValue.charAt(0) == "4") {
      const ten = singleValue.charAt(1);
      return "Fourty-" + unit(ten);
    }
    if (singleValue.charAt(0) == "5") {
      const ten = singleValue.charAt(1);
      return "Fifty-" + unit(ten);
    }
    if (singleValue.charAt(0) == "6") {
      const ten = singleValue.charAt(1);
      return "Sixty-" + unit(ten);
    }
    if (singleValue.charAt(0) == "7") {
      const ten = singleValue.charAt(1);
      return "Seventy-" + unit(ten);
    }
    if (singleValue.charAt(0) == "8") {
      const ten = singleValue.charAt(1);
      return "Eighty-" + unit(ten);
    }
    if (singleValue.charAt(0) == "9") {
      const ten = singleValue.charAt(1);
      return "Ninety-" + unit(ten);
    }
  }
  return result;
};

const unit = (unit: String) => {
  switch (unit) {
    case "1":
      return "One";
      break;
    case "2":
      return "Two";
      break;
    case "3":
      return "Three";
      break;
    case "4":
      return "Four";
      break;
    case "5":
      return "Five";
      break;
    case "6":
      return "Six";
      break;
    case "7":
      return "Seven";
      break;
    case "8":
      return "Eight";
      break;
    case "9":
      return "Nine";
      break;
    default:
      "Error";
  }
};
