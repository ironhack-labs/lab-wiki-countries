export async function getCountries() {
  let uri = `https://ih-countries-api.herokuapp.com/countries/`;
  return await fetchCountry(uri);
}

export async function getCountryByCode(code) {
  let uri = `https://ih-countries-api.herokuapp.com/countries/${code}`;
  return await fetchCountry(uri);
}

async function fetchCountry(uri) {
  try {
    const response = await fetch(uri);
    const json = await response.json();

    return json;
  } catch (err) {
    throw err;
  }
}
