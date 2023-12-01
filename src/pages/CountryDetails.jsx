import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CountryDetails() {
  let { countryCode } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const API_URL = `https://ih-countries-api.herokuapp.com/countries/${countryCode}`;

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setCountryInfo(res.data);
    });
  }, [countryCode]);

  return (
    <>
      <h2>Country Details</h2>
      {!countryInfo && <h3>Country not found!</h3>}

      {countryInfo && (
        <div>
          <h3>{countryInfo.name.common}</h3>
          <h4>Capital:</h4>
          <p>{countryInfo.capital}</p>
          <h4>Area:</h4>
          <p>{countryInfo.area} km²</p>
          <h4>Borders:</h4>
          {countryInfo.borders.map((el) => {
            return (
              <div key={el}>
                <Link to={`/${el}`}>{el}</Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
