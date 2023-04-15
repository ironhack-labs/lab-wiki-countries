import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }} G>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              to={`/${country.alpha3Code}`}
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <img
                className=""
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="country flag"
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
