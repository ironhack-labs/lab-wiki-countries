import React from "react";
import { Link, useParams } from "react-router-dom"

const CountryDetails = (props) => {

  const { countryCode } = useParams();

  const foundCountry = props.countries.find((country) => {
    return country.alpha3Code === countryCode;
  });

  return (
    <div className="CountryDetails; col-5 ">
      <div className="col-7">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
        <h1>{foundCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
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
                  {foundCountry.borders.length === 0 ? null : foundCountry.borders.map((countryBorder, index) => {
                    const borderName = props.countries.find(country => country.alpha3Code === countryBorder);
                    return (
                      <li key={index}>
                        <Link to={`/${borderName.alpha3Code}`}>{borderName.name.official}</Link>
                      </li>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )


}

export default CountryDetails;