import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => (
  <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    <div className="list-group">
      {countries.map((country, index_country) => (
        <Link
          className="list-group-item list-group-item-action"
          state={country}
          key={country.alpha3Code}
          to={`/${country.alpha3Code}`}
        >
          {country.name.official}
        </Link>
      ))}
    </div>
  </div>
);
export default CountriesList;
