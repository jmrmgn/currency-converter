/* eslint-disable no-undef */
const URL = 'https://api.exchangeratesapi.io/';

const getRates = async (base = 'PHP') => {
  const baseCurrency = base ? `?base=${base}` : '';
  const response = await fetch(`${URL}latest${baseCurrency}`);
  const data = await response.json();

  return data;
};

const convertCurrency = async (currencyFrom, currencyTo, value = 0) => {
  if (!currencyFrom || !currencyTo) return 0;

  const response = await fetch(
    `${URL}latest?base=${currencyFrom.toUpperCase()}&symbols=${currencyTo.toUpperCase()}`
  );
  const data = await response.json();
  const rate = data.rates[currencyTo.toUpperCase()];
  const convertedValue = (rate * +value).toFixed(2);

  return convertedValue;
};

export { getRates, convertCurrency };
