import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="list-group">
      {props.countries.map((countryObj) => {
        return (
          
          <Link
            key={countryObj.cca3}
            className="list-group-item list-group-item-action"
            to={`/${countryObj.cca3}`}
          >
            <img
              className="me-3"
              src={`https://www.countryflags.io/${countryObj.cca2}/flat/32.png`}
              alt={`Flag of ${countryObj.name.common}`}
            />

            {countryObj.name.common}
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
