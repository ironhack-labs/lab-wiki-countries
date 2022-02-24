import { Link } from 'react-router-dom';
import countriesList from '../countries.json';

function CountriesList() {
  return countriesList.map((eachCountry, index) => {
    return (
      <div
        key={index}
        className="col-5"
        // style="max-height: 90vh; overflow: scroll"
      >
        <div className="list-group">
          <Link
            className="list-group-item list-group-item-action"
            to={eachCountry.alpha3Code}
          >
            {eachCountry.name.official}
          </Link>
        </div>
      </div>
    );
  });
}

export default CountriesList;
