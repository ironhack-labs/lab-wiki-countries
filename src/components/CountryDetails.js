import countryData from "../countries.json";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
    // const [ countryDetails, setCountryDetails] = useState(countryData);
    // const [countries, setCountries] = useState(countryData);
   const { countries } = props;
   const { countryId } = useParams();

   const [foundCountry, setFoundCountry] = useState(null);

useEffect(()=>{
    console.log('useEffect triggered')
const country = countries.find((countryObj)=>{
    return countryObj.alpha3Code === countryId;
})

console.log(country, countryId);


if (country) {
    setFoundCountry(country);
}
}, [countryId, countries]);


console.log(foundCountry)

    return (
<>
{!foundCountry && <h3>Country not found!</h3>}

{foundCountry && (

<div class="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
               <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capitol</td>
                  <td>{foundCountry.capital}</td>
                </tr>
              <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                 <tr>
                  <td>Borders</td>
                   <td>
                    <ul>
        
 {foundCountry.borders.map((nation) => {
    return (
        <li><Link to={`/${nation}`}>{nation}</Link></li>
        )}
        )}
       
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
)}
</>
          )

}

export default CountryDetails;