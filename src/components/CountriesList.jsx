import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function CountriesList() {
  const [countries, setCountries] = useState([]);
  const { alpha3Code } = useParams();
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Coutries List</h2>
      {countries.map((el) => {
        return (
          <di>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`}
              alt="flag4"
            />
            <h5>
              <Link to={`/countriesDetails/${el.alpha3Code}`}>
                {el.name.official}
              </Link>
            </h5>
          </di>
        );
      })}
    </div>
  );
}

export default CountriesList;
