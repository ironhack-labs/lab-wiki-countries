import React from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const CountryDetails = (props) => {
    
    const { cca3 } = props.match.params;
    
    const country = countries.find( country => country.cca3 === cca3)
    

       return (
        <div className="col-7">
            <h1>{country.name && country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
    <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {/*,para cada cca3(cada posicion) me devuelva un li que tenga como key cca3 el key es que va a hacer muchas cosas iguales y es lo que identifica nos lleva a/countries/ cca3 y lo que esta dentro es el pais para saberlo hago un find a countries que es la lista completa de paises y devuelve el name.common del pais en el que coincide */}
                      {country.borders.map(cca3 => {
                          return(<li key={cca3}>
                          <Link to={"/countries/" + cca3 }>
                              {countries.find(country => {
                              return country.cca3 === cca3}).name.common
                              }
                              </Link> 
                              </li>)
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}
export default CountryDetails;