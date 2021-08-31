import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <ul class="list-group">
      {countries.map((country) => { return (
        <Link to={`/details/${country.cca3}`}>
          <li className="list-group-item">{country.name.common}</li>
        </Link>
      )
      })}
    </ul>
  );
}

export default CountriesList;
