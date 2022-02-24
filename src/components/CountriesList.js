import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        setCountries(props.countries);
      }, [props.countries]);

 

  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country, i) => {
          return (
            <Link
              to={country.alpha3Code}
              className="list-group-item list-group-item-action"
              key={i}
            >
              <img
                className="flag"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.alpha2Code}
              ></img>
              <p><b>{country.name.official}</b></p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
