import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {

  const foundCountry = props.countries.find(elm => {return elm.cca3 === props.match.params.cca3});
  const {name, capital, area} = foundCountry;

  return (
    <div className="col-7">
            <h1>{name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{'width': '30%'}}>Capital</td>
                  <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      { foundCountry.borders.length > 0 ? 
                        foundCountry.borders.map(cca3 => {
                        const foundBorder = props.countries.find(elm => {return elm.cca3 === cca3});
                        return <li><Link to={`/${cca3}`}>{foundBorder.name.official}</Link></li>
                      }) : 'This country has no borders'
                      
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}
 
export {CountryDetails};