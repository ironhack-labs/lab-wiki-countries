import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// import countriesArr from '../countries.json';

function CountryDetails(props) {
  const [country, setCountry] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${code}`)
      .then((result) => {
        setCountry(result.data);
      })
      .catch();
  }, [country, code]);

  return (
    <div class="col-7">
      <h1>{props.name}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{props.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {props.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {props.borders.map((element) => {
                  return <li>{element}</li>;
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
