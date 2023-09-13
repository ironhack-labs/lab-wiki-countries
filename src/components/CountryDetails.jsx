import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((result) => {
        setCountry(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (country) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center p-4">
        <img
          width={72}
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt=""
        />
        <h1>{country.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                <b>{country.area}</b> km²
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {country.borders.length
                  ? country.borders.map((border) => (
                      <Link
                        to={`/${border}`}
                        className="text-primary"
                        key={border}
                      >
                        {border ? border : null}
                        <br />
                      </Link>
                    ))
                  : 'No border'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center p-4">
        <p>No country found.</p>
      </div>
    );
  }
}

export default CountryDetails;
