import './CountiresList.css';

import { Link } from 'react-router-dom';

const renderCountries = (countries) => {
  return countries
    ? countries.map((country, index) => (
        <Link
          key={index}
          className="list-group-item list-group-item-action"
          to={'/' + country.alpha3Code}
        >
          <img className="country-flag" src={country.flag} alt="country flag" />{' '}
          {country.name}
        </Link>
      ))
    : [];
};

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">{renderCountries(countries)}</div>
    </div>
  );
};

export default CountriesList;
