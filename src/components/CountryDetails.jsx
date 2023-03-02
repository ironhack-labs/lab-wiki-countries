import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails({ countries }) {
  const [oneCountry, setOneCountry] = useState('');
  const { countryId } = useParams();
  const selectedCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });
  console.log(countryId);

  useEffect(() => {
    const selectedCountry = countries.find((oneCountry) => {
      return oneCountry.alpha3Code === countryId;
    });
    setOneCountry(selectedCountry);
  }, [countryId]);

  console.log(selectedCountry);

  return (
    <div class="col-7">
      <h1>{selectedCountry.name.official}</h1>
      <table class="table">
      <tr>
        <td>name</td>
         <td>Capital</td>
         <td>Area</td>
         <td>Borders</td>
      </tr>
      <tr>
        <td>{selectedCountry.name.official}</td>
        <td>{selectedCountry.capital}</td>
        <td>{selectedCountry.area}</td>
        <td>{selectedCountry.borders.find((border) => (
           <span key={border}>{border} </span>
        ))}</td>
      </tr>
      </table>
    </div>
  );
}

export default CountryDetails;
