import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import countriesList from '../countries.json';

function CountryDetail({ url }) {
  const [foundCountry, setFoundCountry] = useState(null);
  const [neighborsList, setNeighborsList] = useState([]);

  const { countryCode } = useParams();

  useEffect(() => {
    const country = {};

    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((res) => {
        setFoundCountry(res.data);
        // getting names instead of codes
        if (res.data.borders.length) {
          let newNeighborObj;
          let arrToPushNeighbors = [];

          res.data.borders.forEach((neighborCode) => {
            newNeighborObj = countriesList.find((country) => {
              return country.alpha3Code === neighborCode;
            });
            arrToPushNeighbors.push(newNeighborObj);
          });
          setNeighborsList([...arrToPushNeighbors]);
        }
      })
      .catch((err) => console.log(err));
  }, [countryCode]);

  return (
    <div>
      {!foundCountry && <h5>country not found!</h5>}

      {foundCountry && (
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
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
                {!foundCountry.borders.length ? (
                  <td>
                    <h2>Doesn't border on any country!</h2>
                  </td>
                ) : (
                  foundCountry.borders.map((borderCountryCode, ind) => {
                    return (
                      <td>
                        <ul>
                          <Link to={`/${borderCountryCode}`}>
                            {neighborsList[ind].name.common}
                          </Link>
                        </ul>
                      </td>
                    );
                  })
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
