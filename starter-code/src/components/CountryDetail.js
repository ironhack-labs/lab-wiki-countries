import React from 'react';
import countries from '../countries.json';

import { Link } from 'react-router-dom';

const CountryDetail = () => {
  //TODO: set the cca3 of each country as his id for the url
let countriesId = countries.map(country => ({
  id: country.cca3
}));
console.log(countriesId);

return (
  <div>

  </div>
)
}

export default CountryDetail;


