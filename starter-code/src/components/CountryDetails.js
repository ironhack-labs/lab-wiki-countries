import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import queryString from 'query-string'

const countryDetails = (props) => {

    

    const getCountry = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === id;
        }
        
        return countries.find(theCountry)
    };

    
    const foundCountry = getCountry(props.match.params.id)          // URL params
    console.log(foundCountry)
          
    const BorderCountry = foundCountry.borders.map(elm =>{
        console.log(elm)
        return getCountry(elm)
      })
      console.log(BorderCountry)

    // accede a esta URL para ver un query string muy aclaratorio:
    // http://localhost:3000/projects/3c?name=abrigo&color=red&size=small

    return (
        <div>
            <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
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

                      {
                        BorderCountry.map(elm=>{
                           return(<li key={elm.cca3}><Link to={elm.cca3}>{elm.name.common}</Link>  </li>) 
                        }) }
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            
        </div>
    )
}

export default countryDetails;

