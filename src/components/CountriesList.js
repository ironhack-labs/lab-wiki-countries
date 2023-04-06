import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <div>
        {props.countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
