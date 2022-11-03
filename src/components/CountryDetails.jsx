import { Route, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CountriesList from './CountriesList';

function CountryDetails() {
  const [detailCountry, setDetailCountry] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const { alpha3Code } = useParams;
  
  

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setDetailCountry(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, [alpha3Code]);

  // console.log(detailCountry)
  return (
    <div className="col-7">
      <h1>France</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
