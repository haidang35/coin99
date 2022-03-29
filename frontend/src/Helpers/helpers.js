const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCryptoUSDCurrency = (money = 0) => {
  return formatter.format(money);
};

export default function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? formatCryptoUSDCurrency(
        (num / item.value).toFixed(digits).replace(rx, "$1")
      ) + item.symbol
    : formatCryptoUSDCurrency(0);
}

export const convertDate = (dateTimeString) => {
  const date = new Date(dateTimeString)
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}
