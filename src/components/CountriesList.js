import countriesArr from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countriesArr.map((country) => {
        return (
          <div class="list-group">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`}
            ></img>
            <Link
              to={`/${country.alpha3Code}`}
              class="list-group-item list-group-item-action"
            >
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
