import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState();

  const { countryId } = useParams();

  useEffect(() => {
    const selectedCountry = countries.find((country) => {
      return country.alpha3Code === countryId;
    });
    if (selectedCountry) {
      setCountry(selectedCountry);
    }
  }, [countryId]);

  if(country){
    return (
        <div class="col-7">
            <h1>{country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td >Capital</td>
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
      );
  }
  
}

export default CountryDetails;
