import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CountriesList from '../CountriesList/CountriesList';

function CountryDetails({ data }) {
  const { country } = useParams();
  // const [actualCountry, setCountry] = useState('');

  const countryRender = data.find((oneCountry) => oneCountry.cca3 === country);
  // // setCountry(countryRender)

  // console.log("state", actualCountry)

  return (
    <div className="col-5">
      <h1>{countryRender.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryRender.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryRender.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryRender.borders.map((item) => {
                  const countryA = data.find(
                    (countryFind) => countryFind.cca3 === item
                  );
                  return (
                    <Link to={`${item}`}>
                      <li key={item}>{countryA.name.official}</li>
                    </Link>
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
