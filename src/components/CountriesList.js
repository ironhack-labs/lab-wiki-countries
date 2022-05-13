import { useEffect, useState } from 'react';
import '../countries.json';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
        //console.log(response.data)
      })
      .catch((e) => console.log('error getting countries from API', e));
  }, []);

  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country._id}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.official}
              />
              <NavLink to={`/countryDetails/${country.alpha3Code}`}>
                {country.name.official}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
