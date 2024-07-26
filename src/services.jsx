const BASE_URL = 'https://ih-countries-api.herokuapp.com';

export const fetchCountries = async () => {
  const response = await fetch(`${BASE_URL}/countries`);
  const data = await response.json();
  return data;
};

export const fetchCountryDetails = async (alpha3Code) => {
  const response = await fetch(`${BASE_URL}/countries/${alpha3Code}`);
  const data = await response.json();
  return data;
};