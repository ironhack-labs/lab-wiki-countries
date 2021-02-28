// Iteration 1.4. 
import React from 'react'

import { Link } from 'react-router-dom';

function CountryDetails(props) {
  console.log('props', props);
  const { cca3Code } = props.match.params;

  const country = props.countriesData.find((c) => c.cca3 === cca3Code);
  // const country = props.countriesData.find((c) => c.alpha3Code === cca3Code);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30 %' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((cca3) => {
                  return (
                    <li key={cca3}>
                      <Link to={`/${cca3}`}>
                        {/* Get the name of the country */}
                        {
                          props.countriesData.find((c) => c.cca3 === cca3)
                            .name.common
                        }
                        {/* {
                          props.countriesData.find((c) => c.alpha3Code === cca3)
                            .name
                        } */}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

// function CountryDetails(props) {
//     console.log('props', props)

//     const countryId = props.match.params.idOfTheCountry;
//     console.log('countryId', countryId);
  
//     const country = countriesData.find((countryObj) => countryObj.cca3 === countryId)
    
//     const callCountryName = (borderCode) => {
//         console.log('hola', borderCode);
//         for (let i = 0; i < countries.length; i++) {
//             if (countries[i].cca3 === borderCode)
//                 return countries[i].name.common;
//         }
//         return borderCode;
//     };

//     return (
//       <div>
//         <h2>Country Details</h2>
//         <h1>Country Name: { country.name.common}</h1>
//         <h3>Capital: { country.capital}</h3>
//         <p>Area: { country.area}</p>
//         <p>Borders: <ul> { country.borders.map((border) => {
//             return(
//                 <li>{callCountryName(border)}</li>
//             )
//         }) } </ul></p>
//       </div>
//     )
//   }
  
//   export default CountryDetails;