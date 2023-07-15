import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// export default function CountryDetails( {countries} ) {

//   const { id } = useParams();

//   const foundCountry = countries.find((country) => {
//     return country.alpha3Code === id;
//   })

//   return (
//     <div>
//       {!foundCountry && <h3>Country not found!</h3>}

//       {foundCountry && (
//         <>
//           <h2>Capital: {foundCountry.capital}</h2>
//           <h2>Area: {foundCountry.area}km2</h2>
//           <h2>Borders:</h2>
//           <ul>
//           {foundCountry.borders.map((border) => {
//             const borderCountry = countries.find(
//               (country) => country.alpha3Code === border
//             );
//             return (
//               <p key={border}>{borderCountry.name.common}</p>
//             );
//           })}

//           </ul>
          
//         </>
//       )}
//     </div>
//   )
// }

// Iteration #5

export default function CountryDetails() {

  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((res) => {
      setCountryData(res.data);
    })
    .catch((error) => {
      console.log('Error:', error);
    })
  }, [id]);

  if (countryData === null) {
    return <h3>Loading country data...</h3>;
  }

  return (
    <div>

      
          <h2>Capital: {countryData.capital}</h2>
          <h2>Area: {countryData.area}km2</h2>
          <h2>Borders:</h2>
          <ul>
          {countryData.borders.map((border, i) => (
            <p key={i}>
            {border}
            </p>
          ))}
          </ul>
          
  
    </div>
  )
}
