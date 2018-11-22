import React from 'react'
import countriesJSON from '../countries.json'

//name.common, capital[0], area, borders[]
export default function CountryDetail(props) {
    
    const cca3 = props.match.params.cca3;
    const getCountry = (cca3) => {
        const country = ctr => {
            return ctr.cca3 === cca3;
        }
        return countriesJSON.find(country)
    };
    const detailCountry = getCountry(cca3);
  return (
    <div className="country-detail">
      <h1>{detailCountry.name.common}</h1>
      <table>
        <tbody>
            <tr>
                <th>Capital</th>
                <td>{detailCountry.capital[0]}</td>
            </tr>
            <tr>
                <th>Area</th>
                <td>{detailCountry.area}km2</td>
            </tr>
            <tr>
                <th>Borders</th>
                <td>
                    <ul>
                        {detailCountry.borders.map(border => (
                            <li>{getCountry(border).name.common}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
