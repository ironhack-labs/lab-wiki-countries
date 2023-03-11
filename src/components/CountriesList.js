import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', padding: '2rem 0' }}>
        List of Countries
      </h2>
      {countries && countries.length ? (
        countries.map((country, index) => {
          return (
            <Link
              key={country.alpha3Code}
              to={`/country/${country.alpha3Code.toLowerCase()}`}
              className="list-group-item list-group-item-action d-flex flex-column justify-content-center align-items-center"
              style={{ height: '150px' }}
            >
              <div>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="country flag"
                />
              </div>
              <div>{country.name.official}</div>
            </Link>
          );
        })
      ) : (
        <div>No Countries Found</div>
      )}
    </div>
  );
}

export default CountriesList;
