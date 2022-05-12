import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function CountryDetails(props) {
  const [detailsCountry, setDetailsCountry] = useState(null);
  const { countryCode } = useParams();
  useEffect(() => {
    const selectedCountry = props.countries.find((e) => {
      return e.alpha3Code === countryCode;
    });
    setDetailsCountry(selectedCountry);
  }, [countryCode, props.countries]);

  return (
    <>
      {detailsCountry ? (
        <div>
          <h2>{detailsCountry.name.common}</h2>
          <h4>Capital: {detailsCountry.capital[0]}</h4>
          <hr />
          <p>Area: {detailsCountry.area}</p>
          <hr />
          <p>Bordered:</p>

          {detailsCountry.borders.length !== undefined ? (
            <ul>
              {detailsCountry.borders.forEach((x) => {
                console.log(x);
                return <li>{x}</li>;
              })}
            </ul>
          ) : (
            'No Bordered countries'
          )}
        </div>
      ) : (
        <div>....Loading</div>
      )}
    </>
  );
}

export default CountryDetails;
