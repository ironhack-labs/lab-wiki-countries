import { Link } from 'react-router-dom';

function CountriesList(props) {
  console.log(props);
  return (
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {props.countriesArr.map((country) => {
              return (
                <Link to={`/${country.alpha3Code}`}>
                  {country.name.common}
                </Link>
              );
            })}
          </div>
        </div>
  );
}

export default CountriesList;
