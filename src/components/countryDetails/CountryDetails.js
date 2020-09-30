import React, { Component } from 'react'
import countries from '../../countries.json'


class CountryDetails extends Component {

    render() {
    

        const { id } = this.props.match.params

        const country = countries.filter(elm => elm.cca3 === id)
        
        const countryDetailed = country[0]

        console.log(countryDetailed)
        
        return (
            <>
                
                <div className="col-5">
                    
                <h1>{countryDetailed.name.official}</h1>
            
                <table className="table">
              
                    <thead></thead>
              
                    <tbody>
                
                        <tr>
                  
                            <td>Capital</td>
                  
                            <td>{countryDetailed.capital}</td>
                
                        </tr>
                
                        <tr>
                  
                            <td>Area</td>
                 
                            <td>{countryDetailed.area} km<sup>2</sup></td>
                
                        </tr>
                
                        <tr>
                  
                            <td>Borders</td>
                  
                            <td>
                    
                                <ul>

                                    {countryDetailed.borders.map(elm => <li>{elm}</li>)}    
                                        
                                </ul>
                  
                            </td>
                
                        </tr>
              
                    </tbody>
            
                    </table>
                </div>
            </>
        )
    }
}

export default CountryDetails

