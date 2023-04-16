import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countries.map((country) => {
            return (
              <div key={country.alpha3Code} className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/countryDetails/${country.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/w1160/${country.alpha2Code.toLowerCase()}.webp`}
                    width="60px"
                    alt="flag"
                  />
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
