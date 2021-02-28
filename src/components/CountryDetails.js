// Iteration 1.4. 
import React from 'react'

import { Link } from 'react-router-dom';

function CountryDetails(props) {
  console.log('props', props);

  // Iteration 4
  const { cca3Code } = props.match.params;
  const country = props.countriesData.find((c) => c.alpha3Code === cca3Code);

  return (
    <div className="col-7">
      <h1>{country.name}</h1>
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
                      <Link to={`/${cca3}`}> {props.countriesData.find((c) => c.alpha3Code === cca3).name} </Link>
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

//   Iteration 1, Iteration 2 & Iteration 3
//   const { cca3Code } = props.match.params;
//   const country = props.countriesData.find((c) => c.cca3 === cca3Code);

//   return (
//     <div className="col-7">
//       <h1>{country.name.common}</h1>
//       <table className="table">
//         <thead></thead>
//         <tbody>
//           <tr>
//             <td style={{ width: '30 %' }}>Capital</td>
//             <td>{country.capital[0]}</td>
//           </tr>
//           <tr>
//             <td>Area</td>
//             <td>
//               {country.area} km
//               <sup>2</sup>
//             </td>
//           </tr>
//           <tr>
//             <td>Borders</td>
//             <td>
//               <ul>
//                 {country.borders.map((cca3) => {
//                   return (
//                     <li key={cca3}>
//                       <Link to={`/${cca3}`}>{ props.countriesData.find((c) => c.cca3 === cca3).name.common}</Link> {/* Gets the name of the country */}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default CountryDetails;