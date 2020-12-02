import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../../countries.json'

const CountryDetails = props => {

    const country = countries.find(elm => elm.cca3 === props.match.params.cca3)
    
    return (
           
        <div className="col-7 mt-4">
            <h1>{country.name.official}</h1>            
            <table className="table">                
                <thead></thead>                
                <tbody>                    
                    <tr>                        
                        <td>Capital</td>                        
                        <td>{country.capital}</td>                        
                    </tr>                    
                    <tr>                        
                        <td>Area</td>                        
                        <td>{country.area}                      
                           <sup>2</sup>                         
                        </td>                        
                    </tr>                    
                    <tr>                        
                        <td>Borders</td>                        
                        <td>                            
                            <ul>                                    
                                {country.borders.map((elm, index) => {
                            
                                    const border = countries.find(element => element.cca3 === elm)                                   

                                    return (                                            
                                        <li key={index}>                                            
                                            <Link to={`/countries/${border.cca3}`}>{border.name.common}</Link>                                            
                                        </li>                                        
                                    );                                    
                                }                                    
                                )}                                 
                            </ul>                            
                        </td>                        
                    </tr>                    
                </tbody>                
            </table>          
        </div> 
          
    )
}

export default CountryDetails  






