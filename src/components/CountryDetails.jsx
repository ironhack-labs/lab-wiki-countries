import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = (props) => {
  const params = useParams();
  const [countryState, setCountryState] = useState({});
  const [borders, setBorders] = useState([]);
  const [bordersToRender, setBordersToRender] = useState([]);

  const url = `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`;
  const request = () => {
    const data = axios.get(url);
    data.then((data) => {
      setBorders(data.data.borders);
      setCountryState(data.data);
    });
  };
  // fetching the main country of countrydetails
  useEffect(() => {
    request();
  }, [params]);
  // fetching borders of the main country
  useEffect(() => {
    //   creating dynamic list of endpoints
    const endpoints = borders.map(
      (border) => `https://ih-countries-api.herokuapp.com/countries/${border}`
    );

    // using axios.all to get all request at once and setting the data to bordersTorender state
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => setBordersToRender(data));
  }, [borders]);

  return countryState.alpha2Code ? (
    <div className="col-7">
      <img
        // Getting flag image dynamically
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryState.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{countryState.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              {/* if country has more than one capital, separate them using this pattern | 'capital'| */}
              {countryState.capital.map((element) => {
                return countryState.capital.length > 1
                  ? `| ${element} | `
                  : element;
              })}
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryState.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{ listStyle: 'none' }}>
                {/* rendering array of borders
                 * if the country has no borders, display the message 'this country has no border' otherwise, render the array of borders
                 * the result of axios.all is an array of requests so for each element of this array is needed to access the property .data to get the actual data of your fetch
                 */}
                {bordersToRender.length > 1
                  ? bordersToRender.map((border, index) => {
                      return (
                        <li key={border.data.name + index}>
                          <Link to={`/${border.data.alpha3Code}`}>
                            {' '}
                            {border.data.name.official}
                          </Link>
                        </li>
                      );
                    })
                  : 'this country has no borders'}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    ''
  );
};

export default CountryDetails;
