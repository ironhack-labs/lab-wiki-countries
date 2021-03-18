// import React, { PureComponent } from 'react';
import countriesJSON from '../countries.json'
import React from 'react';

const CountryDetails = (props) => {

    const countryId= props.match.params.cca3;

    const oneCountry = countriesJSON.find((country) => country.cca3 === countryId);
    console.log(oneCountry)
  return (
    <div>
      <div class="col-7">
        <h1>{oneCountry.name.official}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{oneCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {oneCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>{oneCountry.capital}</td>
              <td>
                <ul>
                  <li>
                    <a href="/AND">Andorra</a>
                  </li>
                  <li>
                    <a href="/BEL">Belgium</a>
                  </li>
                  <li>
                    <a href="/DEU">Germany</a>
                  </li>
                  <li>
                    <a href="/ITA">Italy</a>
                  </li>
                  <li>
                    <a href="/LUX">Luxembourg</a>
                  </li>
                  <li>
                    <a href="/MCO">Monaco</a>
                  </li>
                  <li>
                    <a href="/ESP">Spain</a>
                  </li>
                  <li>
                    <a href="/CHE">Switzerland</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;

// export class CountryDetails extends PureComponent {
//   render() {
//     return (
//       <div>
//         <div class="col-7">
//           <h1>France</h1>
//           <table class="table">
//             <thead></thead>
//             <tbody>
//               <tr>
//                 <td>Capital</td>
//                 <td>Paris</td>
//               </tr>
//               <tr>
//                 <td>Area</td>
//                 <td>
//                   551695 km
//                   <sup>2</sup>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Borders</td>
//                 <td>
//                   <ul>
//                     <li>
//                       <a href="/AND">Andorra</a>
//                     </li>
//                     <li>
//                       <a href="/BEL">Belgium</a>
//                     </li>
//                     <li>
//                       <a href="/DEU">Germany</a>
//                     </li>
//                     <li>
//                       <a href="/ITA">Italy</a>
//                     </li>
//                     <li>
//                       <a href="/LUX">Luxembourg</a>
//                     </li>
//                     <li>
//                       <a href="/MCO">Monaco</a>
//                     </li>
//                     <li>
//                       <a href="/ESP">Spain</a>
//                     </li>
//                     <li>
//                       <a href="/CHE">Switzerland</a>
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default CountryDetails;
