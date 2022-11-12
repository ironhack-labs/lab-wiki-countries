import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  return (
    <div
      className="col-5 text-center"
      style={{ maxHeight: '90vh', overflow: 'scroll' }}
    >
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div className="" key={country.alpha3Code}>
              <Link
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                />
                <p>{country.name.common}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
