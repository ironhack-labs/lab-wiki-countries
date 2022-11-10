import { Link } from 'react-router-dom';

export function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div>
              <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
