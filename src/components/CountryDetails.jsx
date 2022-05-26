import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const [filteredCountry, setfilteredCountry] = useState(null);
  const { countryId } = useParams();

  /*   const myBorders = filteredCountry.borders.map((border) => border)
   */
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log(response.data);
        setfilteredCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, [countryId]);

  return (
    <div>
      <h1>CountryDetails</h1>
      {filteredCountry && (
        <>
          <h2>{filteredCountry.name.common}</h2>
          <p>{`Capital: ${filteredCountry.capital}`}</p>
          <p>{`Area: ${filteredCountry.area} km2`}</p>
          <ul>
            <li>
              Borders:
              <Link to={`/countries/${countryId.alpha3Code}`}>
                {filteredCountry.borders.map((border) => border)}
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
