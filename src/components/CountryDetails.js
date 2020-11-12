import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';



const CountryDetails = (props) => {
    console.log(props)
    let id = props.match.params.id
    let getCountry = countries.find(country => country.cca3 === id);

    return(
        <div className="col-7">
        <h1>{getCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                    <td>{getCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                 <td>{getCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul> 
                        {
                        getCountry.borders.map((border, index) => {
                            let borderCountry = countries.find(country => country.cca3 === border);
                            console.log()
                        return <li><Link key={index} to={`/${border}`}>{borderCountry.name.common}</Link></li>
                        })
                        }
                    
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

export default CountryDetails