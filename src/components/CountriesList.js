import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overFlow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.alpha2Code}
                />{' '}
                <br />
                {' ' + country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
