import countries from './../../countries.json';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  const displayCountries = () => {
    return countries.map((country) => {
      return (
        <div class="list-group">
          <Link classList="list-group-item list-group-item-action" to={`/${country.cca3}`}>
            {country.flag} {country.name.common}
          </Link>
        </div>
      );
    });
  };
  
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {displayCountries()}
    </div>
  );
}
