import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5">
      <div className="list-group">
        {props.countries.map((eachCountry, index) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={eachCountry.alpha3Code}
              key={index}
            >
              {eachCountry.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
