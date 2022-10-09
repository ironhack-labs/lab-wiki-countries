import CountryArray from '../countries.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CountryDetails() {
  const countryparams = useParams();
  const [isLoading, setIsLoading] = useState(true);
  console.log(countryparams);
  const countryDetail =
    'https://ih-countries-api.herokuapp.com/countries/' + countryparams.id;
  console.log(countryDetail);
  const [foundCountry, setFoundCountry] = useState({});
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/DEU')
      .then((res) => {
        setFoundCountry(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // const foundCountry = CountryArray.find(
  //   (element) => element.alpha3Code === countryparams.id
  // );
  console.log(foundCountry);

  if (isLoading) {
    return <h1>Is Loading</h1>;
  }
  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  const borderCountry = CountryArray.find((country) => {
                    return country.alpha3Code === border;
                  });
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{borderCountry.name.common}</Link>
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
}

export default CountryDetails;
