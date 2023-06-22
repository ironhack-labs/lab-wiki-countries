import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


export function CountryDetails (props){

    const { alpha3Code } = useParams();

    
const filteredCountries = props.countries.filter((countryObj) => {
    return countryObj.alpha3Code.toLowerCase().includes(alpha3Code.toLowerCase());
  });

  const country = filteredCountries[0];


    return(
        <div className="col-7" >
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
  <h1>{country.name.official}</h1>
  <table className="table">
    <thead />
    <tbody>
      <tr>
        <td style={{ width: "30%" }}>Capital</td>
        <td>{country.capital}</td>
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
          {country.borders.map((border) => {
                const borderCountry = props.countries.find(
                  (country) => country.alpha3Code === border
                );
                return (
                  <Link to={`/${borderCountry.alpha3Code}`}>
                    {borderCountry.name.official}
                  </Link>
                );
              })}
          </ul>
        </td>
      </tr>
    </tbody>
  </table>  
</div>
    )
}