import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails({match, countries}) {
    const cca3 = match.params.cca3
    const country = countries?.find(c => c.cca3 === cca3)


    if(!country) {
        return null
    }

    return (
        <>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
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
                    {country.borders.map(cca3 => {
                        const country = countries.find(x => x.cca3 === cca3)
                        return <li style={{"list-style-type": "none", "padding-left":0}}><Link key={country.cca3} to={`/${cca3}`}>{country.name.common}</Link></li>
                    })}

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
}

export default CountryDetails 