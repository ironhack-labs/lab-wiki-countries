import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';

export default function CountriesList(props) {
  return (
    <div className="CountriesList">
      <h2>CountriesList</h2>
      <ul>
        {props.countries.map((elm) => {
          return (
            <li>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                alt={elm.name.common}
              />
              <Link to={`/countries/${elm.alpha3Code}`} key={elm.alpha2Code}>
                {elm.name.common}
              </Link>

              <CountryDetails
                countryId={elm.alpha3Code}
                capital={elm.capital}
                area={elm.area}
                borders={elm.borders}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
