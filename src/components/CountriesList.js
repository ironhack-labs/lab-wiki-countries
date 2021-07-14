import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => (
  <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    <div className="list-group">
      {countries &&
        countries.map((country) => (
          <Link
            to={country.alpha3Code}
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
          >
            <span style={{ fontSize: '0.7em' }}>{country.alpha2Code}</span>{' '}
            {country.name}
          </Link>
        ))}
    </div>
  </div>
);

export default CountriesList;

/* Este código es para cuando nos envían los datos con el formato de countries.json */
/* <Link
  to={country.cca3}
  key={country.cca3}
  className="list-group-item list-group-item-action"
>
  <span style={{ fontSize: '0.7em' }}>{country.cca2}</span>{' '}
  {country.name.common}
</Link> */
