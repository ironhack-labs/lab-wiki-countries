import { Link } from 'react-router-dom';
import './CountriesList.css';

function CountriesList({ countries, setCountryCode }) {
  const countryHandler = (countryCode) => {
    setCountryCode(countryCode);
  };

  return (
    <div className="countriesList col-6">
      {countries.map((country) => {
        return (
          <Link
            to={`/${country.alpha3Code}`}
            onClick={() => countryHandler(country.alpha3Code)}
          >
            <div id={country.name.official} className="countryCard">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <p className="m-0">{country.name.official}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
