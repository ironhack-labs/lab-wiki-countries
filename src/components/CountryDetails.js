import countriesData from '../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as randomId } from 'uuid';

function getName(code) {
  const borderCountry = countriesData.find((borderCountry) => {
    return borderCountry.alpha3Code === code;
  });
  return borderCountry.name.common;
}

function CountryDetails(props) {
  //no need to useState if we dont have api calls or get json data, we using props
  /* const [chosenCountry, setChosenCountry] = useState(null); */
  const { countryId } = useParams();
  /* console.log('countryId', countryId); */

  //here we get data from the props
const chosenCountry = props.countries.find((countryObj) => {
  return countryObj.alpha3Code === countryId;
})

  return (
    <div className="col-7">
      {!chosenCountry && <h3>Loading...</h3>}

      {chosenCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${chosenCountry.alpha2Code.toLowerCase()}.png`}
            alt={`flag-of-${chosenCountry.name.common}`}
            style={{ width: '100px' }}
          />

          <h1>{chosenCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{chosenCountry.capital[0]}</td>
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
                          <li key={randomId()}>
                            <Link to={'/' + alpha3Code}>
                              {getName(alpha3Code)}
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
