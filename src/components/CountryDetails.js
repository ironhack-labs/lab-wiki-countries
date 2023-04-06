import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const baseURL = ' https://ih-countries-api.herokuapp.com/countries/';
  const [country, setCountry] = useState(null);

  const { alpha3Code } = useParams();
  console.log(alpha3Code);

  useEffect(() => {
    axios
      .get(`${baseURL}${alpha3Code}`)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => console.log(err));
  }, [alpha3Code]);
  const renderedCountry = () => {
    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: 30 + '%' }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <> {country ? renderedCountry() : <p>Loading...</p>}

    </>
  );
}

export default CountryDetails;
