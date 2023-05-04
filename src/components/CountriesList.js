import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              className="country-item list-group-item list-group-item-action"
            >
              <Link to={`/countries/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.alpha3Code}
                  className="country-item-image"
                />
                <h3>{country.name.common}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
