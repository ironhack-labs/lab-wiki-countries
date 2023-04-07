import { Link } from 'react-router-dom';

const CountriesList = ({ countries, loaded }) => {
  return (
    <div className="col-5" style={{ height: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {loaded ? (
          countries.map((country) => (
            <Link
              to={`/${country.alpha3Code}`}
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/w80/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
                className="mr-3"
              />
              {country.name.common}
            </Link>
          ))
        ) : (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountriesList;
