import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries, setCountries } = props;
  const copyOfCountries = [...countries];

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12"
          style={{ maxHeight: '80vh', overflow: 'scroll' }}
        >
          {copyOfCountries.map((country) => {
            return (
              <div className="list-group">
                <img
                  width={50}
                  src={`https://flagsapi.com/${country.alpha2Code}/flat/64.png`}
                  alt="country pic"
                />
                <Link
                  value={country.alpha3Code}
                  className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  {' '}
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
