import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      <div className="list-group">
        {countries.map((element) => {
          return (
            <div
              key={element.alpha3Code}
              style={{ width: '500px' }}
              className="list-group-item list-group-item-action"
            >
              <Link to={`/${element.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                  alt=""
                />
                <h2>{element.name.common}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;