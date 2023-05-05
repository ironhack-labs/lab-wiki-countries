import { useParams,Link } from 'react-router-dom';
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
                    {/* Needs to complete the get CountryName function */}
                    {/* {
                        country.borders.map((alpha3,i)=>{
                            return (
                                <li key={i}>
                                    <Link to={"/"+alpha3}>{getCountryName(alpha3)}</Link>

                                </li>
                            )
                        })
                    } */}
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
