import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countries, setCountries } = props;
  const { countryId } = useParams();
  const [borders, setBorders] = useState([]);

  const copyOfCountries = [...countries];

  let filteredArray = copyOfCountries.find((country) => {
    console.log(country);
    return country.alpha3Code === countryId;
  });

  useEffect(() => {
    setBorders(filteredArray.borders);
  }, []);

  return (
    <div className="col-12">
      <img
        src={`https://flagsapi.com/${filteredArray.alpha2Code}/flat/64.png`}
        alt="country pic"
      />
      <h1>{filteredArray.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{filteredArray.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{filteredArray.area} km²</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map((country) => (
                  <li>{country}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
