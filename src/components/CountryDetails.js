import React from 'react'
import { Link, useParams } from "react-router-dom";

function CountryDetails(props) {
    const { countryId } = useParams();
    console.log("Country Id", countryId);

    const foundCountry = props.countriesList.find((singleCountry) => {
        console.log("Single Country", singleCountry);
        //singleCountry map through every country in the list
        return singleCountry.alpha3Code === countryId;
    });
    foundCountry && console.log("Founded country", foundCountry);
    
    return (
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
                {foundCountry.borders.length === 0 ? null : foundCountry.borders.map(element => {
                    const borderName = props.countriesList.find(country => country.alpha3Code === element);
                    return (
                        <li>
                        <Link to={`/country/${borderName.alpha3Code}`}>{borderName.name.official}</Link>
                        
                        </li>
                    )
                })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



    )
}

export default CountryDetails


        