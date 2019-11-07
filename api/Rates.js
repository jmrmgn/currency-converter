const URL = 'https://api.exchangeratesapi.io/';

const getRates = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(`${URL}latest`);
  const data = await response.json();

  return data;
};

const convertCurrency = async (currencyFrom, currencyTo, value = 0) => {
  if (!currencyFrom || !currencyTo) return 0;
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${URL}latest?base=${currencyFrom.toUpperCase()}&symbols=${currencyTo.toUpperCase()}`
  );
  const data = await response.json();
  const rate = data.rates[currencyTo.toUpperCase()];
  const convertedValue = (rate * +value).toFixed(2);

  return convertedValue;
};

export { getRates, convertCurrency };
