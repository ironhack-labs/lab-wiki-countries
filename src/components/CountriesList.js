import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const inlineCss = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };

  const countriesSorted = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b)
  );
  return (
    <div className="col-5" style={inlineCss}>
      <div className="list-group">
        {countriesSorted.map((country) => {
          return (
            <div className="list">
              <Link
                key={country.alpha3Code}
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                ></img>
                {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
