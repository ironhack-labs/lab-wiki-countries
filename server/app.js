const express = require('express');
const app = express();

const countries = require('../src/countries.json');

const getCountryByCode = (cca3) => countries.find((el) => el.cca3 === cca3);

app.get('/api/countries', (req, res) => {
  res.json(countries);
});

app.get('/api/countries/:countryCode', (req, res) => {
  const country = { ...getCountryByCode(req.params.countryCode) };
  country.borders = country.borders.map((cca3) => getCountryByCode(cca3));
  res.json(country);
});

app.listen(5555, () => {
  console.log('Server listening on port 5555');
});
