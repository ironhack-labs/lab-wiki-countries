import { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;
  const [isHidden, setIsHidden] = useState(false);

  const listCountries = () => {
    return countries.map((country) => {
      return (
        <Link
          //'/COUNTRY_CODE'
          to={`/${country.alpha3Code}`}
          key={country.alpha3Code}
          className="list-group-item list-group-item-action"
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          ></img>
          {country.name.common}
        </Link>
      );
    });
  };

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">{listCountries()}</div>
    </div>
  );
}
export default CountriesList;
