import { useState, useEffect } from 'react';
import CountriesData from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CoutriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      {countries.map((el) => {
        return (
          <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <Link to={`/coutries/${el.alpha3Code}`}>{el.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CoutriesList;
