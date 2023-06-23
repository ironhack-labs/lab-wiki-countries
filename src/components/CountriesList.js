import { Link } from 'react-router-dom';

function CountriesList(props) {
  console.log(props.countries);
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country, index) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
