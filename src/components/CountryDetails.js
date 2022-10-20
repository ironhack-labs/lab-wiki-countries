import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { alpha3Code } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log('error getting country from API', e));
  }, [alpha3Code]);

  return (
    <div className="col-7">
      <h1>{details.name && details.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="country-details">Capital</td>
            <td>{details.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {details.borders.map((border) => { //www.heroku/GER
                  return (
                    <div>
                          <Link to={`/${border}`}>
                              {border}
                          </Link>
                    </div>
                  );
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
