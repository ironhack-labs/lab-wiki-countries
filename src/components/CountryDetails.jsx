import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState({});

  const { alpha3Code } = useParams();

  useEffect(() => {
    const foundCountry = countries.find(country => country.alpha3Code === alpha3Code);

    const borders = foundCountry.borders.map(border => {
      const borderName = countries.find(country => {
        return country.alpha3Code === border;
      }).name.common;

      return { name: borderName, alpha3Code: border };
    });

    setCountry({ ...foundCountry, borders });
  }, [alpha3Code]);

  const bordersList = country.borders?.map(border => {
    return <li key={border.alpha3Code}>
      <Link to={`/${border.alpha3Code}`}>
        {border.name}
      </Link>
    </li>
  });

  if (!country.name) {
    return `Loading...`;
  }

  return (
    <div className="col-7">
      <h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country.name.official" style={{ height: `2rem` }} />
        <span> </span>
        {country.name.official}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: `30%` }}>Capital</td>
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
                {bordersList}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails;