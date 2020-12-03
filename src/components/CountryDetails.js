import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


export default function CountryDetails(props) {

    const countryId = props.match.params.id;
    const country = countries.find(country => country.cca3 === countryId);
    const neighbours = country.borders.map(neighbour => {
        return countries.find(neigh => neigh.cca3 === neighbour);
    })

    return (
        <div className="col-7">
            <h1>{ country.name.common } </h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{ country.capital }</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{ country.area } km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        { neighbours.map(neighbour => {
                            return (
                                <li key={ neighbour.cca3 }><Link to={`/${neighbour.cca3}`}>{ neighbour.name.common }</Link></li>
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
