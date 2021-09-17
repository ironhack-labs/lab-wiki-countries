import { Link } from 'react-router-dom';

const renderCountries = (countries) => {
  return countries
    ? countries.map((country, index) => (
        <Link
          key={index}
          className="list-group-item list-group-item-action"
          to={'/' + country.cca3}
        >
          {country.flag} {country.name.common}
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
