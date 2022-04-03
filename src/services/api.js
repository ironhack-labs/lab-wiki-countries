import axios from 'axios';

const API_URL = 'https://ih-countries-api.herokuapp.com/countries';

export const getAllCountries = async () => {
  console.log('Making API request');
  const response = await axios.get(`${API_URL}`);

  if (!response.status === 200) throw new Error('Failed to fetch Countries.');

  return response.data;
};

export const getCountry = async ({ queryKey }) => {
  const [_, alpha3Code] = queryKey;
  const response = await axios.get(`${API_URL}/${alpha3Code}`);

  if (!response.status === 200) throw new Error('Failed to fetch Country.');

  return response.data;
};

export const getBorders = async ({ queryKey }) => {
  const [_, borders] = queryKey;
  console.log(borders);
  let data = Promise.all(
    borders.map(
       (alpha3Code) =>  axios.get(`${API_URL}/${alpha3Code}`)
    )
  );

  return data;
};
