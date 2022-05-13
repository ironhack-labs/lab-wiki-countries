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

  const checkBordered = () => {
    if (detailsCountry.borders.length !== undefined) {
      detailsCountry.borders.map((x) => {
        console.log(x);
        return <li>{x}</li>;
      });
    }
  };
  return (
    <>
      {detailsCountry ? (
        <div key={detailsCountry._id}>
          <h2>{detailsCountry.name.common}</h2>
          <h4>Capital: {detailsCountry.capital[0]}</h4>
          <hr />
          <p>Area: {detailsCountry.area}</p>
          <hr />
          <p>Bordered:</p>
          <ul>
            {detailsCountry.borders.length
              ? detailsCountry.borders.map((x) => {
                  return (
                    <li key={x}>
                      {' '}
                      <Link to={`/${x}`}>{x}</Link>
                    </li>
                  );
                })
              : 'No Bordered countries'}
          </ul>
        </div>
      ) : (
        <div>....Loading</div>
      )}
    </>
  );
}

export default CountryDetails;
