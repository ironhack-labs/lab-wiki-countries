import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => setCountry(response.data));
  }, [id]);
  
  if(country){
  return (
    <div className="col-7">
      <h1>{country.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>
                        {
                          countries.find(
                            (country) => country.alpha3Code === border
                          ).name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}}
export default CountryDetails;
