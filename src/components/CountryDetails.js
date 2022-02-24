import countriesData from '../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as randomId } from 'uuid';

function CountryDetails(props) {
  const [chosenCountry, setChosenCountry] = useState(null);

  const { countryId } = useParams();
  /* console.log('countryId', countryId); */

  useEffect(() => {
    const country = countriesData.find((oneCountry) => {
      return oneCountry.alpha3Code === countryId;
    });

    if (country) {
      setChosenCountry(country);
    }
  }, [countryId]);

 /*  function getName(alpha3Code) {
    countriesData.find(
      (borderCountry) => alpha3Code === borderCountry.alpha3Code
    );}; */

  return (
    <div className="col-7">
      {!chosenCountry && <h3>Country not found!</h3>}

      {chosenCountry && (
        <>
          <h1>{chosenCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{chosenCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {chosenCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {!chosenCountry.borders ? (
                      <span>This country has no borders</span>
                    ) : (
                    chosenCountry.borders.map((alpha3Code) => {
                        return (
                          <li key={randomId()} >
                            <Link to={`/countries/${alpha3Code}`}>
                             {alpha3Code}
                            </Link>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
