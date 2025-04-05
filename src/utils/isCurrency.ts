export const isCurrency = (num: number) => {
  if (!num) return "0.00";

  return num.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
  });
};

export const currencyToNumber = (currency: string) => {
  const cleanCurrency = currency.replace(/,/g, "");
  const decimalSeparator = cleanCurrency.includes(".") ? "." : ",";

  const numberValue = parseFloat(cleanCurrency.replace(decimalSeparator, "."));

  return isNaN(numberValue) ? 0 : numberValue;
};
