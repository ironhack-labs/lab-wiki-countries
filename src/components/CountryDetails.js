import React from 'react';
import { Link, useParams } from 'react-router-dom';

// consider using axios instead of passing all countries
// https://restcountries.eu/rest/v2/alpha/DEU
// https://restcountries.eu/rest/v2/alpha?codes=FRA;DEU

export default function CountryDetails(props) {
  let { id: countryId } = useParams();
  //console.log('CountryDetails', props.countries[10]);
  //if (true) return <h3>testing CountryDetails</h3>;

  const country = props.countries.find((el) => el.alpha3Code === countryId);
  //console.log('CountryDetails country', country);

  const borders = country.borders.map((border) => {
    let bordercountry = props.countries.find((el) => el.alpha3Code === border);
    return (
      <li key={'sub-' + border}>
        <Link className="text-decoration-none " to={`/countries/${border}`}>
          {bordercountry.name}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Flag</td>
            <td>
              <img src={country.flag} alt={country.name} />
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
