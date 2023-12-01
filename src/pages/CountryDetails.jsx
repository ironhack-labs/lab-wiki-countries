import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function CountryDetails() {
  let { alpha3Code } = useParams();
  const [countryInfo, setCountryInfo] = useState({});
  const [data, setData] = useState(true);

  console.log('HALLO, ', alpha3Code);
  useEffect(() => {
    const API_URL_INFO = `https://ih-countries-api.herokuapp.com/countries/`;
    axios.get(API_URL_INFO + alpha3Code).then((resp) => {
      setCountryInfo(resp.data);
      setData(false);
    });
  }, [alpha3Code]);

  return (
    <>
      <h2>Country Details</h2>
      {data && <h3>Country not found!</h3>}

      {!data && (
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
