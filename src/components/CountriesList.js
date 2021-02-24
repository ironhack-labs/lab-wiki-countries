import { Link } from 'react-router-dom';
import './CountriesList.css';
const CountriesList = ({ countriesList }) => (
  <section>
    {countriesList.map((country) => (
      <div className="row" key={country.alpha3Code}>
        <Link className="country-link" to={`/${country.alpha3Code}`}>
          <img className="flag-icon" src={country.flag} alt={country.name} />
          {country.name}
        </Link>
      </div>
    ))}
  </section>
);

export default CountriesList;
