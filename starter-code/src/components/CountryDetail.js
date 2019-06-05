import React from 'react';
import countries from '../countries.json';
// import { Switch, Route } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log( { ID: props.match.params.id } )
  const { params } = props.match;
  const foundCountry = countries.find( country => country.cca3 === params.id)
    console.log(foundCountry)
    console.log(foundCountry.borders)

    const bordersList = foundCountry.borders.map( (border, i) => (
      <div>
        <li>{border}</li>
      </div>
    ))

    let style = {'width':'30%'}

    return ( 
      <div className="col-7">
              <h1>{foundCountry.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={style}>Capital</td>
                    <td>{foundCountry.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{foundCountry.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {bordersList}
                        {/* <li><a href="/AND">Andorra</a></li> */}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
    ) 
  
}

export default CountryDetail;