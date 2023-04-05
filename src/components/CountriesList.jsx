import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
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
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
