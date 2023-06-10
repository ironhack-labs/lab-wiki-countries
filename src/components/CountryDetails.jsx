import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { countryCode } = useParams();
  const [countryDetail, setCountryDetail] = useState(null);

  const selectedCountry = countries.find(country => country.alpha3Code === countryCode);

  // const getCountryDetails = (countryCode) => {
  //     let countriesCopy = [...countries];
  //     const filteredCountries = countriesCopy.find((oneCountry) => {
  //         if (oneCountry.alpha3Code === countryCode) {
  //             return true;
  //         }
  //     })
  //     setCountryDetail(filteredCountries);
  // }
  // getCountryDetails();

//   const oneCountry = countries.filter((oneFilteredCountry) => {
//     if (oneFilteredCountry.alpha3Code === countryCode) {
//       return true;
//     }
//     // setCountryDetail(oneCountry);
//   });
//   console.log("THIS COUNTRY",oneCountry);

  return (
    <div class="col-7">
      <h1>{selectedCountry.name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          {/* <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/LUX">Luxembourg</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li>
                </ul>
              </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
