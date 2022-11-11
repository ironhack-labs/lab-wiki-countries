import { Link } from 'react-router-dom';

export function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              style={{
                border: 'grey 1px dotted',
                marginBottom: '4px',
                borderRadius: '16px',
              }}
            >
              <img
                style={{ width: '30px' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
              />
              <br />
              <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
