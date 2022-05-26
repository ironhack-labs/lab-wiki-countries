import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ overflowY: 'scroll' }}>
      {countries.map((country) => {
        return (
          <div className="list-group" key={country.alpha2Code}>
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              <h2>{country.name.common}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
