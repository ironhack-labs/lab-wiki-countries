import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <>
      <div className="col-5 countries-list">
        <div className="list-group">
          {props.countries.map((country) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`} key={country.alpha3Code}
              >
                {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default CountriesList;
