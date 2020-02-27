import React from 'react'
import Countries from "../countries.json" 
import { Link, Route } from "react-router-dom";


const CountryDetail = (props) => {
    
    console.log('props',props);
    
    const {countryId} = props.match.params;


    const getCountryById = (countryIdArg) => {

        const result = Countries.find( (country) => country.cca3 === countryIdArg)
        return result;
    }

    const countryToDisplay = getCountryById(countryId);

    
    
    
    
    return (
        
        <div className="col-7">
        <h1>{countryToDisplay.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="capital">Capital</td>
              <td>{countryToDisplay.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{countryToDisplay.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>

              
            <ul>
                {
                    
                    countryToDisplay.borders.map( (countryId) => {
                        return (
                            <li>

                                <Link to={`/${countryId}`} >
                                {
                                Countries.map( (country) => {
                                    if (country.cca3 === countryId) {
                                        return <p> {country.name.common} </p>
                                    }
                                }

                                )   
                                }
                                </Link>

                        
                            </li>       
                         )
                    }
                    )
                }
            </ul>


              
              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
   
        
    )
}

export default CountryDetail