import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/dist";

function CountryDetails({countries}) {
  const { alpha3Code } = useParams();
  const [country, setCountry ] = useState(null);


  useEffect(() =>{
    setCountry( countries.find( (countryFiltered) => {
      console.log(countryFiltered.alpha3Code)
      return countryFiltered.alpha3Code === alpha3Code
    }))
  },[alpha3Code,countries])

  return ( 
    <div className="col-8 pt-5 ml-6">
      {country ? (
        <div className="col-7">
          <img
            alt={country.alpha2Code}
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td >Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area + 'km'}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.map((border, i) => {
                    return (<li key={border}><Link to={`/${border}`}>{border}</Link></li>)
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : 'Loading country...'}
    </div>
   );
}

export default CountryDetails;