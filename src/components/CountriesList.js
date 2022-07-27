import { Link } from 'react-router-dom';

function CountriesList({ countryData }) {
  return (
    <div
      className="col-5"
      style={{
        maxHeight: '90vh',
        overflow: 'scroll',
      }}
    >
      <div className="list-group">
        {countryData.map((country) => {
          return (
            <li key={country.alpha3Code} style={{ listStyleType: 'none' }}>
              <Link
                to={'/' + country.alpha3Code}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`flag of ${country.name.commom}`}
                  style={{
                    height: '20px',
                    marginRight: '15px',
                  }}
                />
                {country.name.common}
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
