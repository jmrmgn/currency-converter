/* eslint-disable no-undef */
import { getRates } from './Rates';

const URL = 'http://countryapi.gear.host/v1/Country/getCountries';

const getCountries = async () => {
  const response = await fetch(`${URL}`);
  const { Response: data } = await response.json();
  const { date, rates } = await getRates();

  const countryFlags = data.reduce((newObj, entry) => {
    newObj[entry.CurrencyCode] = entry.FlagPng;
    return newObj;
  }, {});

  const countries = Object.keys(rates).reduce((newArr, entry) => {
    newArr.push({
      code: entry,
      rate: rates[entry].toFixed(2),
      flag: countryFlags[entry]
    });
    return newArr;
  }, []);

  return { date, countries };
};

export { getCountries };
