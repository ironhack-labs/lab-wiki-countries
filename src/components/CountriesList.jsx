import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import axios from 'axios';

function CountriesList(props) {
  /* const { countries } = props; */

  const [allCountries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="list-group">
          {allCountries.map((el) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                to={`/${el.alpha3Code}`}
              >
                {el.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
